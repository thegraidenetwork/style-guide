// File selector event
$(document).on('change', ':file', function() {
    var input = $(this),
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [this.id, label]);
});
// File selector dynamic label
$(document).ready( function() {
    $(':file').on('fileselect', function(event, id, label) {
        $('#'+id+'_message').text('"'+label+'" attached!');
    });
});
