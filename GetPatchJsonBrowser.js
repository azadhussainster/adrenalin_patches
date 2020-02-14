class Patch {
    constructor(e, t) {
        this.name = e, this.downloadPath = t, this.dep = []
    }
    addD(e) {
        this.dep = e.split('+').map(e => e.trim())
    }
    getdep() {
        return this.dep
    }
}
var data = [];
$('#Table1 > tbody  > tr[valign=middle]').each(function(e, t) {
    var a = new Patch;
    $(this).find('td').each(function(e, t) {
        1 == e ? (a.name = $.trim(t.textContent), a.downloadPath = $.trim($(t).find('a').attr('href'))) : 3 == e && a.addD($.trim(t.textContent))
    }), data.push(a)
});
var MPName = 'ADL_2009_17739',
    MP = data.filter(e => e.name.indexOf(MPName) >= 0),
    resolved = [],
    temp = [1, 2];
resolved.push(MP[0]);
for (var i = 0; temp.length > 0 && i < 100;)
	temp = [],
	pp = [],
	MP.forEach(function(e, t) {
		e.dep.forEach(function(e, t) {
			pp = data.filter(t => t.name == e)[0], 'undefined' != typeof pp && !resolved.includes(pp) && temp.push(pp)
		})
}),
MP = temp, resolved.push.apply(resolved, MP), i += 1;
var TE = JSON.stringify(data);