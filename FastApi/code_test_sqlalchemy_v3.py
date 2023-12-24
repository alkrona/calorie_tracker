from code_test_sqlalchemy import engine,User,Calorie
from sqlalchemy.orm import Session
from sqlalchemy import select,and_


def add_user(name:str,password:str,email:str)->None:
    with Session(engine) as session:
        new_user = User(name=name,password=password,email=email)
        session.add(new_user)
        session.commit()
def retrive_user_id(name:str,password:str)->str:
    with Session(engine) as session:
        condition = User.name==name,User.password==password
        stmt=select(User.id).where(and_(User.name==name,User.password==password))
        #print(f" the user_id is {session.execute(stmt).all()}")
        #result=session.execute(stmt).first()
        #print(f" the user id is {session.scalars(stmt).first()}")
        try:
            result=session.scalars(stmt).first()
            if result:
                return f"{session.scalars(stmt).first()}"
            else:
                return "invalid user"
        except:
            return "invalid user"
        
def add_calorie_data(user_id,weight,calorie,date):
    with Session(engine) as session:
        calorie_entry=Calorie(user_id=user_id,date=date,weight=weight,calories_today=calorie)
        session.add(calorie_entry)
        session.commit()
    
def retrive_lifetime_weight_data(user_id):
    with Session(engine) as session:
        stmt = select(Calorie.weight,Calorie.date).where(user_id==user_id)
        rows = session.scalars(stmt).all()
        return((rows))
def retrive_lifetime_calorie_data(user_id):
    with Session(engine) as session:
        stmt = select(Calorie.calories_today,Calorie.date).where(user_id==user_id)
        rows = session.scalars(stmt).all()
        return((rows))
def main():
    """add_user("Spongebob","1112","spongebob@gmail.com")
    with Session(engine) as session:
        stmt=select(User)
        rows = session.execute(stmt).all()
        print(rows)"""
    """
    user_id=retrive_user_id(name="kiran",password="1111")
    print(user_id)"""
    """add_calorie_data(1,75,2300,"2023-12-23")"""
    """print(retrive_lifetime_calorie_data(1))"""
    print(retrive_lifetime_weight_data(1))
if __name__ =="__main__":
    main()