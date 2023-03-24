# Gladiator-pictures
Create a databse for pictures of gladiators

https://gladiator-pictures.web.app/

## Organizing of the project

### Database
Every element has : 
- Name : Stabia, Chieti, ...
- Type : relief, mosaic, ...
- Date : 200 - 100, undated 
- Geographical location : Rome, Chieti, ...
- Gladiator seen : Mumillo, Secutor, ... (array)
- Museum info ? 

Type of properties 

Name (string)
Image (image link) 
Origin (string) 
Roman Province (string) 
Dating number ( 2 int ) 
Dating (string)
Location (string)
Type (string)
Material (string)
Type of Gladiator (array of string)
Literatur (array of string)
Description (Markdown text) does no need to be included in the database if not possible


Searchable properties : 

Text search (Name, Origin, Location) 
Dating search (Dating (number))
Type search (Type) 
Type of Gladiator search (Type of gladiator)  

### Main page 
A main page with a search function, that can search according to the name, the time span, the type, the geographical origin, etc 

### Result page
Result page organized as list of elements pages, can be reorganize in grid 

### Element page 
A diapo of the images and all the information 
With an option to add information to the element ( evolution : changes can be reviewed ) 
