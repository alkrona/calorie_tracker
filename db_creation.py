import mysql.connector

# Connect to the MySQL server
cnx = mysql.connector.connect(
    host="localhost",
    user="alka",
    password="JADDIvasu1234!"
)

# Create a new database
cursor = cnx.cursor()
cursor.execute("CREATE DATABASE calorie_track")

# Switch to the new database
cursor.execute("USE calorie_track")

# Create a table for the metrics
cursor.execute("""
    CREATE TABLE metrics (
        id INT AUTO_INCREMENT PRIMARY KEY,
        date DATE,
        calorie INT,
        weight FLOAT
    )
""")

# Commit the changes and close the connection
cnx.commit()
cursor.close()
cnx.close()
