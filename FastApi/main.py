from fastapi import FastAPI,HTTPException,Depends
import model
from sqlalchemy.orm import Session
from database import SessionLocal,engine
from typing import Annotated,List
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from calorie_llm import calorie_count
app = FastAPI()
origins = [
    'http://localhost:3000',
]
app.add_middleware(
                    CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=['*'],
                   allow_headers=['*']
                   )
class DataEntryBase(BaseModel):
    date:str
    calorie:float
    weight:float
class DataEntryModel(DataEntryBase):
    id:int

    class Config:
        from_attributes = True
class calorieBase(BaseModel):
    food_description:str
class calorieModel(calorieBase):
    calories:float
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
db_dependency = Annotated[Session, Depends(get_db)]
model.Base.metadata.create_all(bind=engine)
@app.post("/calorieEntry/",response_model=DataEntryModel)
async def create_dataEntry(data_entry:DataEntryBase,db:db_dependency):
    db_data_entry = model.calorie_entry(**data_entry.model_dump())
    db.add(db_data_entry)
    db.commit()
    db.refresh(db_data_entry)
    return db_data_entry
@app.get("/calorie_entry/",response_model=List[DataEntryModel])
async def list_monthly_data_entry(db:db_dependency,date_start:str="2023-12-01",date_end:str="2023-12-09"):
    skip=0
    limit =100
    monthly_data_entries = db.query(model.calorie_entry).offset(skip).limit(limit).all()
    return monthly_data_entries
@app.post("/calorie_count/",response_model=calorieModel)
async def insert_calorieCount(food_description:calorieBase):
    calories = calorie_count(food_description)
    return calories
def main():
    
if __name__=='__main__':
    main()