const Calendar = class {
    constructor(year, month) {
        // year param
        this.year = year;
        // month param
        this.month = month;
        // number of days according to the month & the year
        this.days = new Date(this.year, this.month, 0).getDate();
        // for example, if 1st day is a friday, there will be 4 empty days ( sunday - monday - thesday - wednesday )
        this.emptyDaysBeforeFirstDay = new Date(this.year, this.month - 1).getDay();
        // day 1 starts at 1
        this.day = 1;
        // number of weeks according to the month & the year
        this.weeks = Math.floor((this.emptyDaysBeforeFirstDay + this.days) / 7 + 1);
        // for example, if the last day is a friday, there will be 2 empty days ( friday - saturday )
        this.emptyDaysAfterLastDay = 7 * this.weeks - this.emptyDaysBeforeFirstDay - this.days;
        // wil contain the md calendar
        this.tmp = [];
        // an empty day space
        this.space = '                 ';
        // first part of the tmp
        this.md = `| 🗓 |        Su       |        Mo       |        Tu       |        We       |        Tu       |        Fr       |        Sa       |
| -- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- |\n`
    }
    // push a linked day according to the index ( number of week )
    addDay(index) { this.tmp[index].push(`[${this.day}](#${this.year}-${this.month}-${this.day})`) };
    // increment the day if its under number of months's days
    incDay () { if ( this.day <= this.days ) this.day++ };
    // of the day/month is under 10, it'll be writter 09 instead of 9, 05 instead of 5, etc
    setIntUnderTen (param) { 
        if (param < 10) param = `0${param}`;
        return param   
    };
    fill() {
        // init the first month number
        this.month = this.setIntUnderTen(this.month);
        // for every week, push an empty array, which will contain 7 days
        for (let i = 0; i < this.weeks; i++) this.tmp.push([]);
        // for every empty days before first day, push an empty day space
        for (let i = 0; i < this.emptyDaysBeforeFirstDay; i++) this.tmp[0].push(this.space);
        // for every not empty day in the first week, set the day
        for (let i = 0; i < 7 - this.emptyDaysBeforeFirstDay; i++) {
            // set the day, if under 10 or not,
            this.day = this.setIntUnderTen(this.day);
            console.log(this.day);
            // add day in the first week ( 0 ),
            this.addDay(0);
            //  and increment
            this.incDay();
        }
        // for every next week,
        for (let i = 0; i < this.tmp.length; i++) {
            // unshift the number of the week before every week
            this.tmp[i].unshift(` W${i+1} `);
            // for every day in the current week
            for (let j = 0; j < 7; j++) {
                // set the day, if under 10 or not
                this.day = this.setIntUnderTen(this.day);
                // add the last days of the lasst week
                if (i <= this.weeks - 2 && this.day <= this.days ) this.addDay(i + 1);
                // and increment
                this.incDay();
            }   
        }
        // for every last empty days after last day, push empty spaces
        for (let h = 0; h < this.emptyDaysAfterLastDay; h++) this.tmp[this.tmp.length - 1].push(this.space);
        // for every week, push all string in the tmp
        for (let i = 0; i < this.weeks; i++) this.md += `|${this.tmp[i].join('|')}|\n`;
        // return the template
        return console.log(`🛠 | Copy/paste the calendar table in a markdown file. \n==================================================\n\n${this.md}`);
    }
}
new Calendar(2019, 02).fill();
