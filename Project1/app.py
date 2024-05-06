from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('implementation1.html')


@app.route('/implementation2')
def implementation2():
  
    return render_template('implementation2.html')  

if __name__ == '__main__':
    app.run(debug=True)