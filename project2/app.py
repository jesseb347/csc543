from flask import Flask, render_template, jsconfig, send_from_directory
import pandas as pd
import os

app = Flask(__name__)

@app.route('/')
def index():
    # R1.2: Implement a web client application interface.
    return render_template('index.html')

@app.route('/get-csv-data')
def get_csv_data():
    # R1.3: Develop interactive client-side web applications.
    # Fetch CSV data and convert it to JSON for the web client.
    df = pd.read_csv('projects_feedback.csv')
    return jsonify(df.to_dict(orient='records'))

@app.route('/download-csv')
def download_csv():
    # R1.5: Manage communications between client and server.
    # Provide a server-side application to handle file downloads.
    return send_from_directory(directory=os.getcwd(), path='projects_feedback.csv', as_attachment=True)

@app.route('/download-zip')
def download_zip():
    # R1.5: This also manages client-server communications for file downloads.
    return send_from_directory(directory=os.getcwd(), path='content.zip', as_attachment=True)

if __name__ == '__main__':
    # R1.6: This Flask application is hosted and maintained in a way that it can be run locally or deployed on a server.
    app.run(debug=True)
