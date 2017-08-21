from flask import Flask, json
from .api.lyricservice import generating
app = Flask(__name__)

@app.route('/api/v1/', methods=['GET'])
def get_lyrics_and_swears():
    # return 'hello friends'
    ret_obj = generating('dram', 'broccoli')
    print(type(ret_obj))
    return json.dumps(ret_obj)
