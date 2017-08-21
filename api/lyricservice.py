#!/usr/bin/env python
from bs4 import BeautifulSoup
import urllib.request, urllib.error, urllib.parse

def generating(artist, title):
    artist = artist.lower().replace(" ", "")
    title = title.lower().replace(" ", "")
    generate_url = 'http://azlyrics.com/lyrics/'+artist+'/'+title +'.html'
    return processing(generate_url, artist, title)

def processing(generate_url, artist, title):
    try:
        response = urllib.request.urlopen(generate_url)
        read_lyrics = response.read()
        soup = BeautifulSoup(read_lyrics, "html.parser")
        lyrics = soup.find_all("div", attrs={"class": None, "id": None})
        lyrics = [x.getText() for x in lyrics]
        return printing(artist, title, lyrics)
    except urllib.error.HTTPError:
        print('404: not found')

def printing(artist, title, lyrics):
    return_object = {'artist': artist, 'title': title, 'swears': {}}
    for x in lyrics:
        swear_count, return_object = check_for_bad_words(x, return_object)

    print('swear count: {}'.format(swear_count))

    return return_object


def check_for_bad_words(lyrics, return_object):
    swear_words = ['fuck', 'shit', 'asshole', 'dick', 'piss', ' cunt ', 'cock', 'tits ', 'goddamn', 'nigga', 'nigger', 'pussy']
    swear_count = 0

    for word in swear_words:
        current_word = lyrics.count(word)
        swear_count += current_word

        if current_word > 0:
            return_object['swears'][word] = current_word
            print("{} - {}".format(word, current_word))

    print(return_object)
    return swear_count, return_object


# if __name__ == "__main__":
#     # while True:
#     input_artist = 'snoop dogg'
#     input_song = 'ginandjuice'
#     # input_artist = str(input('artist > '))
#     # input_song = str(input('song title > '))
#     print(input_artist, input_song)
#     generating(input_artist, input_song)
