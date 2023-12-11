import random
import datetime
import mysql.connector

start_date = datetime.date(2023, 10, 11)
end_date = datetime.date(2023, 12, 8)

current_date = start_date
index =1

def data_entry(date,index):
    try:
        connection = mysql.connector.connect(host='localhost',
                                            database='calorie_track',
                                            user='alka',
                                            password='JADDIvasu1234!')

        print(f"INSERT INTO metrics (id, date, calorie, weight) VALUES  ({index}, {date}, {random.randint(1700,3000)},{random.uniform(70,80)} )")
        mySql_insert_query = f"INSERT INTO metrics (id, date, calorie, weight) VALUES  ({index}, '{date}', {random.randint(1700,3000)},{random.uniform(70,80)} )"

        cursor = connection.cursor()
        cursor.execute(mySql_insert_query)
        connection.commit()
        print(cursor.rowcount, "Record inserted successfully into Laptop table")
        cursor.close()

    except mysql.connector.Error as error:
        print("Failed to insert record into Laptop table {}".format(error))

    finally:
        if connection.is_connected():
            connection.close()
            print("MySQL connection is closed")
while current_date <= end_date:
    mysql_date = current_date.strftime('%Y-%m-%d')
    # Perform your MySQL operations with the mysql_date
    print(mysql_date)  # Replace this with your MySQL code
    data_entry(mysql_date,index)
    current_date += datetime.timedelta(days=1)
    index +=1
class daily_data:
    def __init__(self, date, calorie, weight):
        self.date = date
        self.calorie = calorie  
        self.weight = weight
