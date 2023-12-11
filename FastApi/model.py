from database import Base
from sqlalchemy import Column, Integer, String, Float

class calorie_entry(Base):
    __tablename__ ='calorie_entry'
    id = Column(Integer,primary_key=True,index=True)
    date = Column(String)
    calorie = Column(Float)
    weight  = Column(Float)