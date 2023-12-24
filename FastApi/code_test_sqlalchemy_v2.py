from code_test_sqlalchemy import engine,User,Calorie
from sqlalchemy.orm import Session
from sqlalchemy import select
from datetime import datetime, timedelta
import random
# Get today's date
today = datetime.now()

# Calculate the date 100 days ago
start_date = today - timedelta(days=100)

# Print dates in SQL date format using a for loop
for i in range(101):
    current_date = start_date + timedelta(days=i)
    sql_date_format = current_date.strftime('%Y-%m-%d')
    user_id=1
    weight=random.uniform(70,85)
    calories= random.randint(2000,4000)
    calorie_entry=Calorie(user_id=user_id,date=sql_date_format,weight=weight,calories_today=calories)
    with Session(engine) as session:
        session.add(calorie_entry)
        session.commit()



    
with Session(engine) as session:
    stmt = select(User)
    user_obj = session.scalars(stmt).all()
    stmt = select(User.name,User.email)
    rows = session.execute(stmt).all()
print(rows)