(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav: false
    });


   // Single Line Chart
   var lineChartCanvas = $("#line-chart");
   if (lineChartCanvas.length) {
       var ctx3 = lineChartCanvas.get(0).getContext("2d");
       var myChart3 = new Chart(ctx3, {
           type: "line",
           data: {
               labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
               datasets: [{
                   label: "Salse",
                   fill: false,
                   backgroundColor: "rgba(0, 156, 255, .3)",
                   data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
               }]
           },
           options: {
               responsive: true
           }
       });
   }


    // Pie Chart1
    var pieChartCanvas1 = $("#pie-chart1"); // เลือก Canvas สำหรับ Pie Chart 1
    if (pieChartCanvas1.length) {
        var ctx1 = pieChartCanvas1.get(0).getContext("2d");
        var myChart1 = new Chart(ctx1, {
            type: "pie",
            data: {
                labels: ["USA", "UK", "AU"],
                datasets: [{
                    data: [95, 75, 60],
                    backgroundColor: [
                        "rgba(0, 156, 255, .7)",
                        "rgba(0, 156, 255, .5)",
                        "rgba(0, 156, 255, .3)"
                    ]
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                aspectRatio: 1
            }
        });
        // เพิ่ม CSS เพื่อจัดให้อยู่ตรงกลาง
        pieChartCanvas1.css({
            "margin": "0 auto",
            "display": "block"
        });
    }


    var pieChartCanvas2 = $("#pie-chart2"); // เลือก Canvas สำหรับ Pie Chart 2
    if (pieChartCanvas2.length) {
        var ctx2 = pieChartCanvas2.get(0).getContext("2d");
        var myChart2 = new Chart(ctx2, {
            type: "pie",
            data: {
                labels: ["USA", "UK", "AU"],
                datasets: [{
                    data: [80, 65, 45],
                    backgroundColor: [
                        "rgba(255, 99, 132, .7)",
                        "rgba(255, 99, 132, .5)",
                        "rgba(255, 99, 132, .3)"
                    ]
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                aspectRatio: 1
            }
        });
        // เพิ่ม CSS เพื่อจัดให้อยู่ตรงกลาง
        pieChartCanvas2.css({
            "margin": "0 auto",
            "display": "block"
        });
    }




    // Single Bar Chart1
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [
                {
                    label: "Dataset 1",
                    backgroundColor: [
                        "rgba(0, 156, 255, .7)",
                        "rgba(0, 156, 255, .6)",
                        "rgba(0, 156, 255, .5)",
                        "rgba(0, 156, 255, .4)",
                        "rgba(0, 156, 255, .3)"
                    ],
                    data: [55, 49, 44, 24, 15]
                },
                {
                    label: "Dataset 2",
                    backgroundColor: [
                        "rgba(255, 99, 132, .7)",
                        "rgba(255, 99, 132, .6)",
                        "rgba(255, 99, 132, .5)",
                        "rgba(255, 99, 132, .4)",
                        "rgba(255, 99, 132, .3)"
                    ],
                    data: [30, 42, 35, 18, 25]
                }
            ]
        },
        options: {
            responsive: true
        }
    });
    // Single Bar Chart2
    var ctx4 = $("#bar-chart2").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [
                {
                    label: "Dataset 1",
                    backgroundColor: [
                        "rgba(0, 156, 255, .7)",
                        "rgba(0, 156, 255, .6)",
                        "rgba(0, 156, 255, .5)",
                        "rgba(0, 156, 255, .4)",
                        "rgba(0, 156, 255, .3)"
                    ],
                    data: [55, 49, 44, 24, 15]
                },
                {
                    label: "Dataset 2",
                    backgroundColor: [
                        "rgba(255, 99, 132, .7)",
                        "rgba(255, 99, 132, .6)",
                        "rgba(255, 99, 132, .5)",
                        "rgba(255, 99, 132, .4)",
                        "rgba(255, 99, 132, .3)"
                    ],
                    data: [30, 42, 35, 18, 25]
                }
            ]
        },
        options: {
            responsive: true
        }
    });
    // Multiple Bar Chart
    var ctx5 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                label: "USA",
                data: [15, 30, 55, 65, 60, 80, 95],
                backgroundColor: "rgba(0, 156, 255, .7)"
            },
           
            ]
        },
        options: {
            responsive: true
        }
    });

    
    

    

})(jQuery);

