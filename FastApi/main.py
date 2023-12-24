from fastapi import FastAPI,HTTPException,Depends,status
import code_test_sqlalchemy_v3 as db_functions
from sqlalchemy.orm import Session
from sqlalchemy import select
import logging
from typing import Annotated,List
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from calorie_llm import calorie_count
from sqlalchemy.exc import SQLAlchemyError
logging.basicConfig(filename="logger.log",level=logging.INFO)

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
class UserBase(BaseModel):
    name:str
    password:str
    email:str

class UserModel(UserBase):
    user_id:int
    class Config:
        from_attributes = True
class DataEntryBaseAdv(BaseModel):
    date:str
    calorie:float
    weight:float
    user_id:int
class DataEntryModelAdv(DataEntryBaseAdv):
    id:int

    class Config:
        from_attributes = True
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
class calorieModel(BaseModel):
    calories:float
"""
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
    return monthly_data_entries"""
@app.post("/calorie_count/",response_model=calorieModel)
async def insert_calorieCount(food_description:calorieBase):
    calories = calorie_count(food_description.food_description)
    return {"calories":calories} 
@app.post("/create_user/")
async def insert_calorieCount(user_entry:UserBase):
    
    db_data_entry= db_functions.add_user(**user_entry.model_dump())
    #logging.info(db_data_entry)
@app.post("/get_user_id/")
async def get_user_id(user_entry:UserBase):
    user_id = db_functions.retrive_user_id(user_entry.name,user_entry.password)
    logging.info(user_id)
    return({"user_id":f"{user_id}"})
@app.post("/calorie_data_entry/")
async def calorie_data_entry(calorie_entry:DataEntryBaseAdv):
    calorie_entry=db_functions.add_calorie_data(
        user_id=calorie_entry.user_id,
        weight=calorie_entry.weight,
        calorie=calorie_entry.calorie,
        date=calorie_entry.date,
        )
    logging.info(calorie_entry)
@app.post("/retrive_calorie_data/")
async def retrive_calorie_data(user_id:str):
    calorie_data = db_functions.retrive_lifetime_calorie_data(int(user_id))
    logging.info(calorie_data)
@app.post("/retrive_weight_data/")
async def retrive_weight_data(user_id:str):
    weight_data = db_functions.retrive_lifetime_weight_data(int(user_id))
    logging.info(weight_data)
"""
def main():
    print(list_monthly_data_entry(db=db_dependency))
if __name__=='__main__':
    main()
    """