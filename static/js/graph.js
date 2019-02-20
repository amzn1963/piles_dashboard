queue()
    .defer(d3.csv, "data/Dept.csv")
    .await(makeGraphs);

function makeGraphs(error, deptData) {
    var ndx = crossfilter(deptData);
    
    

    show_discipline_selector(ndx);

    show_percent_that_are_counters(ndx, "Female", "#percent-of-women-counters");
    show_percent_that_are_counters(ndx, "Male", "#percent-of-men-counters");

    show_gender_balance(ndx)
    show_auditor_distribution(ndx)
    show_researcher_distribution(ndx)

    dc.renderAll();
}

function show_discipline_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('discipline'));
    var group = dim.group();

    dc.selectMenu("#discipline-selector")
        .dimension(dim)
        .group(group);
}

function show_percent_that_are_counters(ndx, gender, element) {
    var percentageThatAreCounters = ndx.groupAll().reduce(
        function(p, v) {
            if (v.sex === gender) {
                p.count++;
                if (v.rank === "Counter") {
                    p.are_counters++;
                }
            }
            return p;
        },
        function(p, v) {
            if (v.sex === gender) {
                p.count--;
                if (v.rank === "Counter") {
                    p.are_counters--;

                }
            }
            return p;
        },
        function() {
            return { count: 0, are_counters: 0 }
        },

    );

    dc.numberDisplay(element)
        .formatNumber(d3.format(".2%"))
        .valueAccessor(function(d) {
            if (d.count == 0) {
                return 0;
            }
            else {
                return (d.are_counters / d.count);
            }
        })
        .group(percentageThatAreCounters)
}

function show_gender_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('sex'));
    var group = dim.group();

    dc.barChart("#direct-counting")
        .width(300)
        .height(350)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Gender")
        .yAxis().ticks(15);
}

function show_auditor_distribution(ndx) {
    
     var dim = ndx.dimension(dc.pluck("sex"));
     
     var auditorCounterByGender = dim.group().reduce(
         function (p, v) {
             p.total++;
             if(v.rank == "AuditorCounter") {
                 p.match++;
             }
             return p;
         },
         function (p, v) {
             p.total--;
             if(v.rank == "AuditorCounter") {
                 p.match--;
             }
             return p;
         },
         function () {
             return {total: 0, match: 0};
         }
         );

    function rankByGender (dimension, rank) {
        return dimension.group().reduce(
            function (p, v) {
             p.total++;
             if(v.rank == rank) {
                 p.match++;
             }
             return p;
         },
         function (p, v) {
             p.total--;
             if(v.rank == rank) {
                 p.match--;
             }
             return p;
         },
         function () {
             return {total: 0, match: 0};
         }
         );
            
    }
    var auditorCounterByGender = rankByGender(dim, "AuditorCounter");
    
    
    

    dc.barChart("#indirect-auditing")
        .width(300)
        .height(350)
        .dimension(dim)
        .group(auditorCounterByGender, "AuditorCounter")
        .valueAccessor(function (d) {
            if(d.value.total > 0) {
                return (d.value.match) 
            } else {
                return 0;
            }
        })
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Gender")
        .yAxis().ticks(4);
}

function show_researcher_distribution(ndx) {
    
     var dim = ndx.dimension(dc.pluck("sex"));
     
     var researcherCounterByGender = dim.group().reduce(
         function (p, v) {
             p.total++;
             if(v.rank == "ResearcherCounter") {
                 p.match++;
             }
             return p;
         },
         function (p, v) {
             p.total--;
             if(v.rank == "ResearcherCounter") {
                 p.match--;
             }
             return p;
         },
         function () {
             return {total: 0, match: 0};
         }
         );

    function rankByGender (dimension, rank) {
        return dimension.group().reduce(
            function (p, v) {
             p.total++;
             if(v.rank == rank) {
                 p.match++;
             }
             return p;
         },
         function (p, v) {
             p.total--;
             if(v.rank == rank) {
                 p.match--;
             }
             return p;
         },
         function () {
             return {total: 0, match: 0};
         }
         );
            
    }
    var researcherCounterByGender = rankByGender(dim, "ResearcherCounter");
    
    
    

    dc.barChart("#indirect-researching")
        .width(300)
        .height(350)
        .dimension(dim)
        .group(researcherCounterByGender, "ResearcherCounter")
        .valueAccessor(function (d) {
            if(d.value.total > 0) {
                return (d.value.match) 
            } else {
                return 0;
            }
        })
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Gender")
        .yAxis().ticks(4);
}
