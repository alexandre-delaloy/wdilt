const Calendar = class {
    constructor(year, month, days, bfr) {
        this.year = year;
        this.month = month;
        this.days = days;
        this.bfr = bfr
        this.day = 1;
        this.weeks = Math.floor((this.bfr + this.days) / 7 + 1);
        this.ftr = 7 * this.weeks - this.bfr - this.days;
        this.tmp = [];
        this.space = '                 ';
        this.md = `| 🗓 |        Mo       |        Tu       |        We       |        Tu       |        Fr       |        Sa       |        Su       |
| -- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- |\n`
    }
    addDay(index) {
        return this.tmp[index].push(`[${this.day}](#${this.year}-${this.month}-${this.day})`)
    }
    incDay() {
        if ( this.day <= this.days ) {
            return this.day++;
        }
    }
    fill() {
        if (this.month < 10) {
            this.month = `0${this.month}`;
        }
        for (let i = 0; i < this.weeks; i++) {
            this.tmp.push([]);
        }
        for (let i = 0; i < this.bfr; i++) {
            this.tmp[0].push(this.space);
        }
        for (let i = 0; i < 7 - this.bfr; i++) {
            if (this.day < 10) {             
                this.day = `0${this.day}`;         
            }
            this.addDay(0);
            this.incDay();
        }
        for (let i = 0; i < this.tmp.length; i++) {
            this.tmp[i].unshift(` W${i+1} `);
            for (let j = 0; j < 7; j++) {
                if (this.day < 10) {             
                    this.day = `0${this.day}`;         
                }
                if (i <= this.weeks - 2) {
                    if (this.day <=this.days ) {
                        this.addDay(i + 1);
                    }
                }
                this.incDay();
            }   
        }
        for (let h = 0; h < this.ftr; h++) {
            this.tmp[this.tmp.length - 1].push(this.space);
        }
        for (let i = 0; i < this.weeks; i++) {
            this.md += `|${this.tmp[i].join('|')}|\n`;
        }
        console.log('🛠 | Here we go !\n🏷 | Copy/paste the calendar table in a markdown file. \n==================================================\n');
        return console.log(this.md);
    }
}
const December = new Calendar(2018, 12, 31, 5);
const January = new Calendar(2019, 01, 31, 1);

new Calendar(2018, 12, 31, 5).fill();