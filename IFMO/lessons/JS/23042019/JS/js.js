let valueGenerator = {
    value: 0,
    increment: function(){
        this.value++;
        return this;
    },
    add: function (num) {
        this.value += num;
        return this;
    },
    logVal: function () {
        console.log(this.value);
        return this;
    }
};

// valueGenerator.add(valueGenerator.add(5));
valueGenerator.add(5)
    .add(3)
    .logVal()
    .increment()
    .increment()
    .logVal();


