queue()
    .defer(d3.csv, "data/Dept.csv")
    .await(makeGraphs);

function makeGraphs(error, deptData) {
    var ndx = crossfilter(deptData);
    
    deptData.forEach(function(d) {
        d.yrs_since_qual = parseInt(d["yrs.since.qual"]);
        d.yrs_service = parseInt(d["yrs.service"]);
    })

    show_shift_selector(ndx);

    show_percent_that_are_counters(ndx, "Female", "#percent-of-women-counters");
    show_percent_that_are_counters(ndx, "Male", "#percent-of-men-counters");

    show_gender_balance(ndx)
    show_auditor_distribution(ndx)
    show_researcher_distribution(ndx)
    show_rank_distribution(ndx)
    show_service_to_qualification_correlation(ndx)

    dc.renderAll();
}

function show_shift_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('discipline'));
    var group = dim.group();

    dc.selectMenu("#shift-selector")
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
    var dim = ndx.dimension(dc.pluck("sex"));
    var group = dim.group();

    dc.barChart("#direct-counting")
        .width(400)
        .height(300)
        .margins({ top: 10, right: 60, bottom: 30, left: 60 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Gender")
        .yAxis().ticks(12);
}

function show_auditor_distribution(ndx) {
    
     var dim = ndx.dimension(dc.pluck("sex"));
     
     var auditorByGender = dim.group().reduce(
         function (p, v) {
             p.total++;
             if(v.rank == "Auditor") {
                 p.match++;
             }
             return p;
         },
         function (p, v) {
             p.total--;
             if(v.rank == "Auditor") {
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
    var auditorByGender = rankByGender(dim, "Auditor");
    
    
    

    dc.barChart("#indirect-auditing")
        .width(400)
        .height(300)
        .dimension(dim)
        .group(auditorByGender, "Auditor")
        .valueAccessor(function (d) {
            if(d.value.total > 0) {
                return (d.value.match) 
            } else {
                return 0;
            }
        })
        .margins({ top: 10, right: 60, bottom: 30, left: 60 })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Gender")
        .yAxis().ticks(5);
}

function show_researcher_distribution(ndx) {
    
     var dim = ndx.dimension(dc.pluck("sex"));
     
     var researcherByGender = dim.group().reduce(
         function (p, v) {
             p.total++;
             if(v.rank == "Researcher") {
                 p.match++;
             }
             return p;
         },
         function (p, v) {
             p.total--;
             if(v.rank == "Researcher") {
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
    var researcherByGender = rankByGender(dim, "Researcher");
    
    
    

    dc.barChart("#indirect-researching")
        .width(400)
        .height(300)
        .dimension(dim)
        .group(researcherByGender, "Researcher")
        .valueAccessor(function (d) {
            if(d.value.total > 0) {
                return (d.value.match) 
            } else {
                return 0;
            }
        })
        .margins({ top: 10, right: 60, bottom: 30, left: 60 })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Gender")
        .yAxis().ticks(5);
}


function show_rank_distribution(ndx) {
    
    function rankByGender(dimension, rank) {
        return dimension.group().reduce(
            function(p, v) {
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
    
    var dim = ndx.dimension(dc.pluck("sex"));
    var counterByGender = rankByGender(dim, "Counter");
    var auditorByGender = rankByGender(dim, "Auditor");
    var researcherByGender = rankByGender(dim, "Researcher");
    
    dc.barChart("#indirect-combined")
    .width(600)
    .height(400)
    .dimension(dim)
    .group(counterByGender, "Counter")
    .stack(researcherByGender, "Researcher")
    .stack(auditorByGender, "Auditor")
    .valueAccessor(function(d) {
        if(d.value.total > 0) {
            return (d.value.match / d.value.total) * 100;
            } else {
                return 0;
            }
    })
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .legend(dc.legend().x(500).y(0).itemHeight(15).gap(5))
    .margins({ top: 60, right: 20, bottom: 60, left: 30 })
    .transitionDuration(500)
    .xAxisLabel("Gender")
}

function show_service_to_qualification_correlation(ndx) {
    var genderColors = d3.scale.ordinal()
        .domain(["Female", "Male"])
        .range(["red", "blue"]);
        
    var eDim =ndx.dimension(dc.pluck("yrs_service"));
    var experienceDim = ndx.dimension(function(d) {
        return [d.yrs_service, d.yrs_since_qual, d.rank, d.sex];
    });
    var experienceQualGroup = experienceDim.group();
    
    var minExperience = eDim.bottom(1)[0].yrs_service;
    var maxExperience = eDim.top(1)[0].yrs_service;
    
    dc.scatterPlot("#yrs-service")
        .width(750)
        .height(500)
        .x(d3.scale.linear().domain([minExperience, maxExperience]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .yAxisLabel("Years since Qualification")
        .xAxisLabel("Years of Service")
        .title(function(d) {
            return d.key[2] + " qual " + d.key[1];
        })
        .colorAccessor(function (d) {
            return d.key[3];
        })
        .colors(genderColors)
        .dimension(experienceDim)
        .group(experienceQualGroup)
        .margins({top: 10, right: 50, bottom: 75, left: 75})
}