$(document).ready(function() {
    var slideout = new Slideout({
        'panel': document.getElementById('wrap'),
        'menu': document.getElementById('nav'),
        'side': 'right',
    });

    $(".navbar-toggle").click(function(event) {
    	slideout.toggle();
    });

    // temp

    $('#basic').magnificPopup();
    $('#basic').trigger( "click" );
});

// Edit Phone numbers
function EditModalStyling(ModalTitle) {
    
    // Manual properties list
    $.getJSON('FieldManualProp.json', function(data) {
        
        var Modal = $("#ajaxFormDiv");
        var ModalForm = Modal.find('form');

        var FieldManualPropList = data;

        // Go through all fields modal form and save each of them
        var FieldList = {};
        ModalForm.find('select, input:not([type=submit])').each(function() {
            
            var th = $(this);
            
            // Default values for manual properties 
            var FieldLabel = "";
            var FieldPlaceholder = "";
            var FieldCollWidth = 12;

            if (th.attr('name') in FieldManualPropList) {
                var FieldLabel = FieldManualPropList[th.attr('name')].label;
                var FieldPlaceholder = FieldManualPropList[th.attr('name')].placeholder;
                var FieldCollWidth = FieldManualPropList[th.attr('name')].collWidth;
            }

            var OptionList = {};
            if (th.prop("tagName") === "SELECT") {
                OptionList = getOptionList(th);
            }

            FieldList[th.attr('name')] = {
                type: th.attr('type'),
                value: th.attr('value'),
                class: th.attr('class'),
                id: th.attr('id'),
                tagName: th.prop("tagName"),
                label: FieldLabel,
                placeholder: FieldPlaceholder,
                collWidth: FieldCollWidth,
                options: OptionList,
            }
        });

        Modal.find('.modalClose').remove();
        Modal.find('.clear').remove();
        ModalForm.before('<h2 class="text-center">'+ModalTitle+'</h2>');
        ModalForm.html('<div class="row"></div>');

        for (var key in FieldList) {

            console.log(FieldList[key].label);
            
            newInput =  $(document.createElement(FieldList[key].tagName));
            newInput.attr({
                name: key,
                type: FieldList[key].type,
                value: FieldList[key].value,
                class: FieldList[key].class,
                placeholder: FieldList[key].placeholder,
            });

            if (FieldList[key].tagName === "SELECT") {
                for (var optKey in FieldList[key].options) {

                    newOption = $(document.createElement('option'));
                    newOption.text(optKey);
                    newOption.attr("value", FieldList[key].options[optKey].value);
                    
                    if (FieldList[key].options[optKey].selected) {
                        newOption.attr("selected", "selected");
                    }
                    
                    newInput.append(newOption);
                }
            }

            if (FieldList[key].label != "") {
                newFieldLabel =  $(document.createElement("label"));
                newFieldLabel.attr('for', key);
                newFieldLabel.text(FieldList[key].label);
                
                newFieldCaption =  $(document.createElement("div"));
                newFieldCaption.attr('class', 'field_caption');
                newFieldCaption.append(newFieldLabel);

                newField.append(newFieldCaption);
            }
              

            newField = $(document.createElement('div'));
            newField.append(newInput);
            newField.attr('class', 'field col-md-'+FieldList[key].collWidth);

            
            ModalForm.find('.row').append(newField);
        }

        var ModalButtons = '<div class="modal_buttons col-md-12 text-right">'+    
                                '<a class="btn btn-close" href="javascript:closeAjaxForm();">Close</a>'+
                                '<input type="submit" class="btn" value="Submit">'+
                            '</div>';

        ModalForm.find('.row').append(ModalButtons);


    });
}

function getOptionList(Select) {
    var Options = {};

    Select.find('option').each(function() {
        var th = $(this);

        if (th.attr('selected') === "selected") {
            var optionSelected = true;
        } else {
            var optionSelected = false
        }
        
        Options[th.text()] = {
            selected: optionSelected,
            value: th.attr('value'),
        }
    });

    return Options;
}