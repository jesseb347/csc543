from flask import Flask, render_template, request
from datetime import datetime  # Import the datetime module

app = Flask(__name__)

@app.route('/')
def index():
    current_hour = datetime.now().hour  # Get the current hour
    return render_template('index.html', current_hour=current_hour)

@app.route('/convert', methods=['POST'])
def convert():
    fahrenheit = float(request.form['fahrenheit'])
    celsius = (fahrenheit - 32) * 5.0/9.0
    return render_template('result.html', fahrenheit=fahrenheit, celsius=celsius)

if __name__ == '__main__':
    app.run(debug=True)
