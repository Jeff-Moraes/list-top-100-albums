# Features

- **Advanced search**
- **"Favorite" functionality**
- **Show album details**

### Advanced Search

- The user can search an album by its name and also by its category
- This feature filters the albums array from the iTunes IPA
  by the keyword from the input and by the category selected.
- When the user submits the form the albums array from the iTunes IPA
  is filtered and the value of the filteredAlbums variable is updated,
  rendering a new list of albums to the user.

### "Favorite" Functionality

- This feature simulates a favorite functionality.
- The user can select her/his favorites albums
  and also see only the album that has selected.
- When an album is favorited the isFavorite propriety of this album
  it is updated to true, and it renders a red heart showing to the user
  that this album is now added to her/his favorites list.
- The user can also unfavorite the album clicking again at the heart icon,
  what it is going to turn the isFavorite propriety of this album to false.

### Show Album Details

- This feature enables the user to see more information about the album
  when she/he clicks at the show details button.
- When clicking on the button, the propriety showDetails of this album become true,
  which makes the detailsContainer div displayed to the user.
