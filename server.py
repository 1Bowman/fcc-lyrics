from flask import Flask, json
from .api.lyricservice import generating
app = Flask(__name__)

@app.route('/api/v1/<artist>/<song_title>', methods=['GET'])
def get_lyrics_and_swears(artist, song_title):
    ret_obj = generating(artist, song_title)
    print(type(ret_obj))
    return json.dumps(ret_obj)
