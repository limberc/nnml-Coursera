define(["js/lib/modals","js/lib/tooltips"],function(Modal,Tooltip){var $calendarAlertElem=$("#coursera-calendar-alert");if($calendarAlertElem.length){var modal=Modal($calendarAlertElem),tooltip=Tooltip($("[data-tooltip]"),{"animate.in.duration":200});tooltip.on("show",function(){$("[data-tooltip]").removeAttr("data-tooltip"),setTimeout(function(){tooltip.close()},2500)}),modal.open(),modal.on("close",function(){tooltip.open()})}$(".category-show-all a").on("click",function(e){var itemType=$(e.currentTarget).attr("data-item-type");$(e.currentTarget).hide(),$('.course-overview-upcoming-category-experiment[data-item-type="'+itemType+'"] .course-overview-upcoming-experiment-item').show()})});