# Gladiator-pictures
Create a databse for pictures of gladiators

https://gladiator-pictures.web.app/

## Organizing of the project

### Database
Type of properties 

- Name (string) : Stabia, Chieti, ...
- Image (image link) 
- Origin (string) : Rome, Chieti, ...
- Roman Province (string) 
- Dating number ( 2 int ) : [200,300], [-100, 100]
- Dating (string) : augustean, 2nd cent.
- Location (string)
- Type (string)  : relief, mosaic, ...
- Material (string)
- Type of Gladiator (array of string) : Mumillo, Secutor, ...
- Literatur (array of string)
- Description (Markdown text) does no need to be included in the database if not possible


Searchable properties : 

- Text search (Name, Origin, Location) 
- Dating search (Dating (number))
- Type search (Type) 
- Type of Gladiator search (Type of gladiator)  

### Main page 
A main page with a search function, that can search according to the name, the time span, the type, the geographical origin, etc 

### Result page
Result page organized as list of elements pages, can be reorganize in grid 

### Element page 
A diapo of the images and all the information 
With an option to add information to the element ( evolution : changes can be reviewed ) 
