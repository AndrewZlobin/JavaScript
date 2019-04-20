function FightEngine(engineName, version, size) {
    //this._anotherCat = anotherCat;
    this._cats = [];
    this._maxSize = size
}

FightEngine.prototype.catsToFight = function (cat) {
    if (! cat instanceof Cat) {
        console.log("объект не является объектом Cat");
        return;
    }

    if (this._cats.length === this._maxSize) {
        console.log("Место на ринге для котиков кончилось");
        return;
    }

    this._cats.push(cat);
    console.log(this._cats);
};

FightEngine.prototype.fightResults = function () {
    if (!this._cats.length) {
        console.log("котики не собрались для битвы");
        return;
    }

    //console.log(this._cats[1].getAge());

     for (let i = 0; i < this._cats.length; i++) {
         let pointForFirstCat = 0;
         let pointForSecondCat = 0;

         //console.log(typeof this._cats[i].getAge());
          if (this._cats[i].getAge() > this._cats[i+1].getAge()) {
              console.log('%c Attention,please! ',
                  'color: white; background-color: #95B46A',
                  "Котик по кличке " + this._cats[i].getName() + " оказался старше и получает 1 очко");
              pointForFirstCat++;
              console.log('%c Current Points:  ',
                  'color: green; background-color: grey',
                  this._cats[i].getName(), pointForFirstCat);
          } else {
              console.log('%c Attention,please! ',
                  'color: white; background-color: #95B46A',
                  "Котик по кличке " + this._cats[i+1].getName() + " оказался старше и получает 1 очко");
              pointForSecondCat++;
              console.log('%c Current Points:  ',
                  'color: green; background-color: grey',
                  this._cats[i+1].getName(), pointForSecondCat);
          }
         if (this._cats[i].getWeight() > this._cats[i+1].getWeight()) {
             console.log('%c Attention,please! ',
                 'color: white; background-color: #95B46A',
                 "Котик по кличке " + this._cats[i].getName() + " оказался больше и получает 1 очко");
             pointForFirstCat++;
             console.log('%c Current Points:  ',
                 'color: green; background-color: grey',
                 this._cats[i].getName(), pointForFirstCat);
         } else {
             console.log('%c Attention,please! ',
                 'color: white; background-color: #95B46A',
                 "Котик по кличке " + this._cats[i+1].getName() + " оказался больше и получает 1 очко");
             pointForSecondCat++;
             console.log('%c Current Points:  ',
                 'color: green; background-color: grey',
                 this._cats[i+1].getName(), pointForSecondCat);
         }
         if (this._cats[i].getStr() > this._cats[i+1].getStr()) {
             console.log('%c Attention,please! ',
                 'color: white; background-color: #95B46A',
                 "Котик по кличке " + this._cats[i].getName() + " оказался сильнее и получает 1 очко");
             pointForFirstCat++;
             console.log('%c Current Points:  ',
                 'color: green; background-color: grey',
                 this._cats[i].getName(), pointForFirstCat);
         } else {
             console.log('%c Attention,please! ',
                 'color: white; background-color: #95B46A',
                 "Котик по кличке " + this._cats[i+1].getName() + " оказался сильнее и получает 1 очко");
             pointForSecondCat++;
             console.log('%c Current Points:  ',
                 'color: green; background-color: grey',
                 this._cats[i+1].getName(), pointForSecondCat);
         }

         console.table('%c Результат боя: ',
             'color: red',
             this._cats[i].getName(), pointForFirstCat, this._cats[i+1].getName(), pointForSecondCat);
         if(pointForFirstCat > pointForSecondCat) {
             console.log('%c Победил: ',
                 'color: darkorange',
                 this._cats[i].getName());
         } else {
             console.log('%c Победил: ',
                 'color: darkorange',
                 this._cats[i+1].getName());
         }
     }
};

