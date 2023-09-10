from flask import Flask, request, jsonify
import pymysql
from flask_cors import CORS
from datetime import datetime,timedelta
conn = pymysql.connect(
    host="localhost",
    user="root",
    password = "2453",
    database = "bookstore",
    cursorclass=pymysql.cursors.DictCursor
)
cursor = conn.cursor()

app = Flask(__name__)
CORS(app)
# users =[{'name':"amir","password":"1234", "email":"amir@123.com","phone":"1234567890"},{'name':"naveen","password":"5678", "email":"amir@123.com","phone":"1234567890"},]

@app.post('/register')
def register():
    data = request.json
    email = data['email']
    password = data['password']
    
    


    createddate=datetime.now().date()
    subscription_enddate=createddate+timedelta(days=30)
    role='user'
    subscription='subscribed'

    sql = """INSERT INTO user(email, password, createddate, subscription, subscription_enddata, role) 
            VALUES (%s, %s, %s, %s, %s, %s)"""  

    val = (email, password, createddate, subscription, subscription_enddate, role)

    cursor.execute(sql, val)
    conn.commit()
    cursor.execute("select userid from user where email=%s and password=%s",(email,password))
    userid=fetchone()
    print(userid)
    return {'status': 'success','userid':userid}


@app.post('/login')
def login():
    data = request.json
    print(data)
    email, password = data['email'], data['password']
    print(data['email'])
    cursor.execute("select * from user where email = %s and password = %s",(email,password))
    user = cursor.fetchone()
    if user:
        print(user['userid'])
        return jsonify({'status':True,'userid':user['userid']})
    return {'status':False}

@app.get('/books')
def books():
    cursor.execute("select * from book")
    response=cursor.fetchall()
    if response:
        return response
if __name__ == "__main__":
    app.run(debug=True)