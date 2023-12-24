from sqlalchemy import create_engine,String,Integer,Float,ForeignKey
from sqlalchemy.orm import DeclarativeBase
from typing import List
from typing import Optional
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
class Base(DeclarativeBase):
    pass
engine = create_engine("sqlite+pysqlite:///cal_test2.db", echo=True)
class User(Base):
    __tablename__="user_account"
    id:Mapped[int] = mapped_column(primary_key=True)
    name:Mapped[str] = mapped_column(String(30))
    password:Mapped[str] = mapped_column(String)
    email:Mapped[str] = mapped_column(String)
    calories : Mapped[List["Calorie"]] = relationship(back_populates="user")
    def __repr__(self) -> str:
        return f"User(id={self.id!r}, name={self.name!r}, password={self.password!r},email = {self.email!r})"
    
class Calorie(Base):
    __tablename__ = "calorie"
    id:Mapped[int] = mapped_column(primary_key=True)
    weight:Mapped[float]= mapped_column(Float)
    date:Mapped[str] = mapped_column(String)
    calories_today:Mapped[str] = mapped_column(Integer)
    user_id:Mapped[int] = mapped_column(ForeignKey("user_account.id"))
    user: Mapped[User] = relationship(back_populates="calories")
    def __repr__(self) -> str:
        return f"User(id={self.id!r}, user_id={self.user_id!r}, date={self.date!r},calories = {self.calories_today!r},weight={self.weight!r})"
#Base.metadata.create_all(engine)