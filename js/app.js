const arrStudents = [
	{
		name: 'Wayne Barnett',
		position: 'Founder & CEO',
		img: 'wayne-barnett-founder-ceo.jpg',
	},
    {
		name: 'Angela Caroll',
		position: 'Chief Editor',
		img: 'angela-caroll-chief-editor.jpg',
	},
    {
		name: 'Walter Gordon',
		position: 'Office Manager',
		img: 'walter-gordon-office-manager.jpg',
	},
    {
		name: 'Angela Lopez	',
		position: 'Social Media Manager',
		img: 'angela-lopez-social-media-manager.jpg',
	},
    {
		name: 'Scott Estrada',
		position: 'Developer',
		img: 'scott-estrada-developer.jpg',
	},
    {
		name: 'Barbara Ramos',
		position: 'Graphic Designer',
		img: 'barbara-ramos-graphic-designer.jpg',
	},
	
];

console.table(arrStudents);

for (let i = 0; i < arrStudents.length; i++) {
	console.log(`${arrStudents[i].name} ${arrStudents[i].position} ${arrStudents[i].img}`);
}