import mysql.connector
conn = mysql.connector.connect(host='localhost',
                               database='calorie_track',
                               user='alka',
                               password='JADDIvasu1234!')
cursor = conn.cursor()
cursor.execute("""SELECT calorie FROM metrics 
               WHERE date > '2023-11-30'
                """)
for ( calorie) in cursor:
    print(calorie)  
cursor.close()
conn.close()