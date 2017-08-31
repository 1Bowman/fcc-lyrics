from flask import Flask, json, request
from .v1.lyricservice import generating
app = Flask(__name__)

@app.route('/api/v1/<artist>/<song_title>', methods=['GET'])
def get_lyrics_and_swears(artist, song_title):
    print(request.headers)
    ret_obj = generating(artist, song_title)
    return json.jsonify(ret_obj), {'Access-Control-Allow-Origin': '*'}
