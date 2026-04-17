from music import musicplayers
from lyrics import songs
import film

# Using music module
musicplayers.play_song("Shape of You")
musicplayers.pause_song()

# Using lyrics subpackage
songs.get_lyrics("Shape of You")

# Using film module
film.play_movie("Avengers")