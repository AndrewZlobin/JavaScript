class Cat {
    constructor(name, age, weight, strength) {
        this._name = name;
        this._age = age;
        this._weight = weight;
        this._strength = strength;

    }

     fight(enemyCat) {

        //Проверка, если вдруг кот будет драться сам с собой
        if (this._name === enemyCat.name) {
            console.error("Кот по кличке", this._name, "гоняется за своим хвостом!\nВсем спасибо, расходимся!");
            return;
        }
        //переменные для подсчета очков в конце матча
        let pointsFirstCat = 0;
        let pointsSecondCat = 0;
    //     //Здесь сделать механизм драки
        console.log("В левом углу ринга", this._name, "\nВ правом углу ринга", enemyCat._name);

        //подсчет очков при сравнении возраста котов
         //console.error((this._weight - enemyCat.weight) > 4);

        if ((this._age - enemyCat.age) > 5) {
            console.log("Кот по кличке", this._name, "настолько стар, что теряет два очка!");
            pointsFirstCat-=2;
            pointsSecondCat+=2;
            console.table(this._name, pointsFirstCat,"\t", enemyCat.name, pointsSecondCat);
        } else if (this._age > enemyCat.age) {
            console.log("Кот по кличке", this._name, "старше, поэтому теряет 1 очко");
            pointsFirstCat--;
            pointsSecondCat++;
            console.table(this._name, pointsFirstCat, "\t", enemyCat.name, pointsSecondCat);
        } else if ((enemyCat.age - this._age) > 5) {
            console.log("Кот по кличке", enemyCat.name, "настолько стар, что теряет два очка!");
            pointsFirstCat+=2;
            pointsSecondCat-=2;
            console.table(this._name, pointsFirstCat,"\t", enemyCat.name, pointsSecondCat);
        } else if (enemyCat.age > this._age) {
            console.log("Кот по кличке", enemyCat.name, "старше, поэтому теряет 1 очко");
            pointsFirstCat++;
            pointsSecondCat--;
            console.table(this._name, pointsFirstCat, "\t", enemyCat.name, pointsSecondCat);
        } else {
            console.log("Так сказать, возрастная ничья!");
            console.table(this._name, pointsFirstCat,"\t", enemyCat.name, pointsSecondCat);
         }

        //подсчет очков по весу
         if ((this._weight - enemyCat.weight) > 10) {
             console.log("Кот по кличке", this._name, "настолько огромный, что получает 3 очка!");
             pointsFirstCat+=3;
             pointsSecondCat-=3;
             console.table(this._name, pointsFirstCat,"\t", enemyCat.name, pointsSecondCat);
         } else if ((this._weight - enemyCat.weight) > 5) {
             console.log("Кот по кличке", this._name, "намного больше, соответственно, получает 2 очка!");
             pointsFirstCat+=2;
             pointsSecondCat-=2;
             console.table(this._name, pointsFirstCat,"\t", enemyCat.name, pointsSecondCat);
         } else if (this._weight > enemyCat.weight) {
             console.log("Кот по кличке", this._name, "больше, и за это ему 1 очко!");
             pointsFirstCat++;
             pointsSecondCat--;
             console.table(this._name, pointsFirstCat, "\t", enemyCat.name, pointsSecondCat);
         }else if ((enemyCat.weight - this._weight) > 10) {
             console.log("Кот по кличке", enemyCat.name, "настолько огромный, что получает 3 очка!");
             pointsFirstCat-=3;
             pointsSecondCat+=3;
             console.table(this._name, pointsFirstCat,"\t", enemyCat.name, pointsSecondCat);
         } else if ((enemyCat.weight - this._weight) > 5) {
             console.log("Кот по кличке", enemyCat.name, "намного больше, соответственно, получает 2 очка!");
             pointsFirstCat-=2;
             pointsSecondCat+=2;
             console.table(this._name, pointsFirstCat,"\t", enemyCat.name, pointsSecondCat);
         } else if (enemyCat.weight > this._weight) {
             console.log("Кот по кличке", this._name, "больше, и за это ему 1 очко!");
             pointsFirstCat--;
             pointsSecondCat++;
             console.table(this._name, pointsFirstCat, "\t", enemyCat.name, pointsSecondCat);
         } else {
             console.log("Так сказать, весовая ничья!");
             console.table(this._name, pointsFirstCat,"\t", enemyCat.name, pointsSecondCat);
         }

         //подсчет очков по силе
         if ((this._strength - enemyCat.strength) > 15) {
             console.log("Кот по кличке", this._name, "настолько сильный, что получает 5 очков!");
             pointsFirstCat+=5;
             pointsSecondCat-=5;
             console.table(this._name, pointsFirstCat,"\t", enemyCat.name, pointsSecondCat);
         } else if ((this._strength - enemyCat.strength) > 10) {
             console.log("Кот по кличке", this._name, "намного сильнее, соответственно, получает 3 очка!");
             pointsFirstCat+=3;
             pointsSecondCat-=3;
             console.table(this._name, pointsFirstCat,"\t", enemyCat.name, pointsSecondCat);
         } else if (this._strength > enemyCat.strength) {
             console.log("Кот по кличке", this._name, "сильнее, и за это ему 1 очко!");
             pointsFirstCat++;
             pointsSecondCat--;
             console.table(this._name, pointsFirstCat, "\t", enemyCat.name, pointsSecondCat);
         }else if ((enemyCat.strength - this._strength) > 15) {
             console.log("Кот по кличке", enemyCat.name, "настолько сильный, что получает 5 очков!");
             pointsFirstCat-=5;
             pointsSecondCat+=5;
             console.table(this._name, pointsFirstCat,"\t", enemyCat.name, pointsSecondCat);
         } else if ((enemyCat.strength - this._strength) > 10) {
             console.log("Кот по кличке", enemyCat.name, "намного сильнее, соответственно, получает 3 очка!");
             pointsFirstCat-=2;
             pointsSecondCat+=2;
             console.table(this._name, pointsFirstCat,"\t", enemyCat.name, pointsSecondCat);
         } else if (enemyCat.strength > this._strength) {
             console.log("Кот по кличке", this._name, "сильнее, и за это ему 1 очко!");
             pointsFirstCat--;
             pointsSecondCat++;
             console.table(this._name, pointsFirstCat, "\t", enemyCat.name, pointsSecondCat);
         } else {
             console.log("Так сказать, ничья!");
             console.table(this._name, pointsFirstCat,"\t", enemyCat.name, pointsSecondCat);
         }

         if(pointsFirstCat > pointsSecondCat) {
             console.log('%c Победил: ',
                 'color: darkorange',
                 this._name);
         } else if (pointsFirstCat < pointsSecondCat) {
             console.log('%c Победил: ',
                 'color: darkorange',
                 enemyCat.name);
         } else {
             console.log('%c Победил: ',
                 'color: darkorange',
                 "НИЧЬЯ!");
         }

     }

    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get weight() {
        return this._weight;
    }
    get strength() {
        return this._strength;
    }
}
