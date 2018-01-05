$(document).ready(function() {

    var $minusIcon = $('.glyphicon-minus');
    var $plusIcon = $('.glyphicon-plus');

    $minusIcon.on('click', function() {
        var inputTypeNumber = $(this).siblings('input[type=number]');
        if (+inputTypeNumber.val() > 1) {
                inputTypeNumber.val(+inputTypeNumber.val() - 1).trigger('change');
        }
    });
    
    $plusIcon.on('click', function() {
        var inputTypeNumber = $(this).siblings('input[type=number]');
        inputTypeNumber.val(+inputTypeNumber.val() + 1).trigger('change');
    });
    
});
