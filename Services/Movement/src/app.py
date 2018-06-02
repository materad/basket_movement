import flask

app = flask.Flask(__name__)

@app.route('/')
def get_home():
    return 'Hello, world!'

app.run(debug=True, host='0.0.0.0')