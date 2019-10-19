const data = [{
		title: 'Section 1',
		lectures: [{
				title: 'Lecture 1 - 1',
			},
			{
				title: 'Lecture 1 - 2',
			},
			{
				title: 'Lecture 1 - 3',
			}
		],
		sections: [{
				title: 'Section 1 - 1',
				sections: [{
						title: 'Section 1 - 1 - 1',
						lectures: [{
							title: 'Lecture 1 - 1 - 1 - 1'
						}, ]
					},
					{
						title: 'Section 1 - 1 - 2'
					},
					{
						title: 'Section 1 - 1 - 3'
					}
				]
			},
			{
				title: 'Section 1 - 2',
				lectures: []
			},
			{
				title: 'Section 1 - 3',
				sections: [{
					title: 'Section 1 - 3 - 1'
				}, ],
				lectures: [{
						title: 'Lecture 1 - 3 - 1'
					},
					{
						title: 'Lecture 1 - 3 - 2'
					},
				]
			}
		]
	},
	{
		title: 'Section 2',
		lectures: [{
				title: 'Lecture 2 - 1',
			},
			{
				title: 'Lecture 2 - 2',
			},
			{
				title: 'Lecture 2 - 3',
			}
		],
		sections: [{
				title: 'Section 2 - 1',
				lectures: [{
						title: 'Lecture 2 - 1 - 1',
					},
					{
						title: 'Lecture 2 - 1 - 2',
					}
				]
			},
			{
				title: 'Section 2 - 2',
				sections: [],
				lectures: []
			},
			{
				title: 'Section 2 - 3',
				sections: [],
				lectures: []
			}
		]
	},
	{
		title: 'Section 3',
		lectures: [{
				title: 'Lecture 3 - 1',
			},
			{
				title: 'Lecture 3 - 2',
			},
			{
				title: 'Lecture 3 - 3',
			}
		],
		sections: [{
				title: 'Section 3 - 1',
				sections: [{
					title: 'Section 3 - 1 - 1',
					lectures: [{
						title: 'Lecture 3 - 1 - 1 - 1'
					}],
					sections: [{
						title: 'Section 3 - 1 - 1 - 1',
						lectures: [{
							title: 'Lecture 3 - 1 - 1 - 1 - 1'
						}],
					}]
				}],
				lectures: []
			},
			{
				title: 'Section 3 - 2',
				sections: [],
				lectures: [{
					title: 'Lecture 3 - 2 - 1'
				}]
			},
			{
				title: 'Section 3 - 3',
				sections: [],
				lectures: []
			}
		]
	},
	{
		title: 'Section 4',
		lectures: [{
				title: 'Lecture 4 - 1',
			},
			{
				title: 'Lecture 4 - 2',
			},
			{
				title: 'Lecture 4 - 3',
				sections: [],
				lectures: []
			}
		],
		sections: [{
				title: 'Section 4 - 1',
				sections: [],
				lectures: []
			},
			{
				title: 'Section 4 - 2',
				sections: [],
				lectures: []
			},
			{
				title: 'Section 4 - 3',
				sections: [{
						title: 'Section 4 - 3 - 1',
					},
					{
						title: 'Section 4 - 3 - 2',
					}
				],
				lectures: []
			}
		]
	}
]

//console.log(data);

//Inizio codice di run-up

//Dichiaro le variabili
var lectureCount = 0;
var sectionCount = 0;
var appearSection = 0;
var appearLectures = 0;
var appearSectionCount = 0;
var appearLecturesCount = 0;
var appearTree = 0;


//Creo un ciclo per leggere la lunghezza e i dati delle lectures e delle sections
for (i = 0; i < data.length; i++) {
	sectionCount++;
	if (data[i].lectures) {
		for (a = 0; a < data[i].lectures.length; a++) {
			console.log(data[i].lectures[a].title);
			lectureCount++;
		}
	}
	for (j = 0; j < data[i].sections.length; j++) {
		sectionCount++;
		if (data[i].sections[j].lectures) {
			for (a = 0; a < data[i].sections[j].lectures.length; a++) {
				console.log(data[i].sections[j].lectures[a].title);
				lectureCount++
			}
		}
		if (data[i].sections[j].sections) {
			for (k = 0; k < data[i].sections[j].sections.length; k++) {
				sectionCount++;
				if (data[i].sections[j].sections[k].lectures) {
					for (a = 0; a < data[i].sections[j].sections[k]; length.a++) {
						console.log(data[i].sections[j].sections[k].lectures[a].title);
						lectureCount++;
					}
				}
			}
		}
	}
}

// Funzione per ottenere le Sections
function getSections() {
	var sections = document.getElementById('sections');
	for (i = 0; i < data.length; i++) {
		var temp = '<div class="btn btn-primary my-1" style="width: 200px;height: 30px">%name%</div><br>';
		temp = temp.replace('%name%', data[i].title);
		sections.innerHTML = sections.innerHTML + temp;
		for (j = 0; j < data[i].sections.length; j++) {
			var temp1 = '<div class="ml-3 btn btn-warning my-1" style="width: 200px;height: 30px">%name%</div><br>';
			temp1 = temp1.replace('%name%', data[i].sections[j].title);
			sections.innerHTML = sections.innerHTML + temp1;
			if (data[i].sections[j].sections) {
				for (k = 0; k < data[i].sections[j].sections.length; k++) {
					var temp2 = '<div class="ml-5 btn btn-danger my-1" style="width: 200px;height: 30px">%name%</div><br>';
					temp2 = temp2.replace('%name%', data[i].sections[j].sections[k].title);
					sections.innerHTML = sections.innerHTML + temp2;
				}
			}
		}
	}

}

//Funzione per ottenere le Lectures
function getLectures() {
	var lecture = document.getElementById('lectures');
	for (i = 0; i < data.length; i++) {
		if (data[i].lectures) {
			for (a = 0; a < data[i].lectures.length; a++) {
				//console.log(data[i].lectures[a].title);
				var temp = '<div class="btn btn-info my-1" style="width: 200px;height: 30px">%name%</div><br>';
				temp = temp.replace('%name%', data[i].lectures[a].title);
				lectures.innerHTML = lectures.innerHTML + temp;
			}
		}
		for (j = 0; j < data[i].sections.length; j++) {
			if (data[i].sections[j].lectures) {
				for (a = 0; a < data[i].sections[j].lectures.length; a++) {
					var temp = '<div class="btn btn-info my-1" style="width: 200px;height: 30px">%name%</div><br>';
					temp = temp.replace('%name%', data[i].sections[j].lectures[a].title);
					lectures.innerHTML = lectures.innerHTML + temp;
				}
			}
			if (data[i].sections[j].sections) {
				for (k = 0; k < data[i].sections[j].sections.length; k++) {
					if (data[i].sections[j].sections[k].lectures) {
						for (a = 0; a < data[i].sections[j].sections[k]; length.a++) {
							var temp = '<div class="btn btn-info my-1" style="width: 200px;height: 30px">%name%</div><br>';
							temp = temp.replace('%name%', data[i].sections[j].sections[k].lectures[a].title);
							lectures.innerHTML = lectures.innerHTML + temp;
						}
					}
				}
			}
		}
	}


}

//Mappare l'albero degli elementi
function getTree() {
	var tree = document.getElementById('tree');
	for (i = 0; i < data.length; i++) {
		var tempSection = '<div class="btn btn-primary my-1" style="min-width: 200px;height: 30px">%name%</div><br>';
		tempSection = tempSection.replace('%name%', data[i].title);
		tree.innerHTML = tree.innerHTML + tempSection;
		if (data[i].lectures) {
			for (a = 0; a < data[i].lectures.length; a++) {
				var temp = '<div class="btn btn-info my-1" style="margin-left:50px;min-width: 200px;height: 30px">%name%</div><br>';
				temp = temp.replace('%name%', data[i].lectures[a].title);
				tree.innerHTML = tree.innerHTML + temp;
			}
		}
		for (j = 0; j < data[i].sections.length; j++) {
			var tempSection1 = '<div class="ml-3 btn btn-warning my-1" style="min-width: 200px;height: 30px">%name%</div><br>';
			tempSection1 = tempSection1.replace('%name%', data[i].sections[j].title);
			tree.innerHTML = tree.innerHTML + tempSection1;
			if (data[i].sections[j].lectures) {
				for (a = 0; a < data[i].sections[j].lectures.length; a++) {
					var temp = '<div class="btn btn-info my-1" style="margin-left:60px;min-width: 200px;height: 30px">%name%</div><br>';
					temp = temp.replace('%name%', data[i].sections[j].lectures[a].title);
					tree.innerHTML = tree.innerHTML + temp;
				}
			}
			if (data[i].sections[j].sections) {
				for (k = 0; k < data[i].sections[j].sections.length; k++) {
					var tempSection2 = '<div class="ml-5 btn btn-danger my-1" style="min-width: 200px;height: 30px">%name%</div><br>';
					tempSection2 = tempSection2.replace('%name%', data[i].sections[j].sections[k].title);
					tree.innerHTML = tree.innerHTML + tempSection2;
					if (data[i].sections[j].sections[k].lectures) {
						for (a = 0; a < data[i].sections[j].sections[k]; length.a++) {
							var temp = '<div class="btn btn-info my-1" style="margin-left:70px;min-width: 200px;height: 30px">%name%</div><br>';
							temp = temp.replace('%name%', data[i].sections[j].sections[k].lectures[a].title);
							tree.innerHTML = tree.innerHTML + temp;
						}
					}
				}
			}
		}
	}


}


//Funzione per nascondere dati di Sections
function clearSections() {
	document.getElementById('sections').innerHTML = "";
}

//Funzione per nascondere dati di Lectures
function clearLectures() {
	document.getElementById('lectures').innerHTML = "";
}

//Funzione per nascondere dati sul numero di Sections
function clearSectionCount() {
	document.getElementById('sectionCount').innerHTML = "";
}

//Funzione per nascondere dati sul numero di Lectures
function clearLecturesCount() {
	document.getElementById('lectureCount').innerHTML = "";
}

//Funzione per nascondere dati albero
function clearTree() {
	document.getElementById('tree').innerHTML = "";
}

//Trasmetto i dati dallo script di JS alla div del file HTML
document.getElementById('getSections').addEventListener('click', function () {
	if (appearSection == 0) {
		getSections();
		appearSection = 1 - appearSection;
	} else {
		clearSections();
		appearSection = 1 - appearSection;
	}
});

document.getElementById('getLectures').addEventListener('click', function () {
	if (appearLectures == 0) {
		getLectures();
		appearLectures = 1 - appearLectures;
	} else {
		clearLectures();
		appearLectures = 1 - appearLectures;
	}
});

document.getElementById('getSectionCount').addEventListener('click', function () {
	if (appearSectionCount == 0) {
		document.getElementById('sectionCount').innerHTML = sectionCount;
		appearSectionCount = 1 - appearSectionCount;
	} else {
		clearSectionCount();
		appearSectionCount = 1 - appearSectionCount;
	}


});

document.getElementById('getLectureCount').addEventListener('click', function () {
	if (appearLecturesCount == 0) {
		document.getElementById('lectureCount').innerHTML = lectureCount;
		appearLecturesCount = 1 - appearLecturesCount;
	} else {
		clearLecturesCount();
		appearLecturesCount = 1 - appearLecturesCount;
	}
});


document.getElementById('getTree').addEventListener('click', function () {
	if (appearTree == 0) {
		getTree();
		appearTree = 1 - appearTree;
	} else {
		clearTree();
		appearTree = 1 - appearTree;
	}
});
// End of code
