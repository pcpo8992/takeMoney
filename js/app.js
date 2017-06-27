var dataNumber = [157, 178];



var width = "200";
var height = "300";
var padding = {
    "left": 50,
    "right": 100,
    "top": 100,
    "bottom": 50
};
var slice = 40;
//增加畫布
addSvg();
//綁定
binder(dataNumber);
//給定資料
render();

function addSvg() {
    d3.select(".static-image")
        .append("svg")
        .classed("svg", true)
        .attr({
            "width": width,
            "height": height,
        })
        .style({
            "border": "1px solid gray"
        });
}

function binder(data) {
    var rect = d3.select(".svg")
        .selectAll("rect")
        .data(data);
    rect.enter()
        .append("rect");
    rect.exit()
        .remove();

    var text = d3.select(".svg")
        .selectAll("text")
        .data(data);
    text.enter()
        .append("text");
    text.exit()
        .remove();
}

function render() {
    d3.select(".svg")
        .selectAll("rect")
        .attr({
            "x": function (d, i) {
                return padding.left + (slice + 10) * i;
            },
            "y": function (d, i) {
                return height - padding.bottom - d;
            },
            "width": slice,
            "height": function (d) {
                return d;
            },
            "fill": function (d, i) {
                return i % 2 == 1 ? "red" : "blue";
            }
        });
    d3.select(".svg")
        .selectAll("text")
        .attr({
            "x": function (d, i) {
                return padding.left + (slice + 10) * i + 10;
            },
            "y": function (d) {
                return height - padding.bottom + 15;
            }
        })
        .text(function (d) {
            return d;
        });
}