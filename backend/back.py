
from urllib import request
from flask import Flask, jsonify
from flask_cors import CORS
from flask import request
import mysql.connector

app = Flask(__name__)
CORS(app)  

# Database configuration
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="gamestats"
)

@app.route('/score', methods=['GET'])
def get_highscores():
    mycursor = mydb.cursor()
    mycursor.execute("SELECT `highscore` FROM `info` WHERE 1")
    myresult = mycursor.fetchone()
    score = myresult[0] if myresult else None
    return jsonify({'score': score})

@app.route('/score', methods=['PUT'])
def update_highscore_endpoint():
    data = request.json
    score = data.get('score')
    if score is not None:
        update_highscore(score)
        return jsonify({'message': 'High score updated successfully!'}), 200
    return jsonify({'error': 'Score is required'}), 400

def update_highscore(score):
    mycursor = mydb.cursor()
    mycursor.execute("UPDATE `info` SET `highscore` = %s WHERE 1", (score,))
    mydb.commit()


if __name__ == '__main__':
    app.run(debug=True)





