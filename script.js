$(document).ready(function () {
    $('#biodata-form').on('submit', function (e) {
        e.preventDefault(); 
       
        const name = $('#name').val();
        const dob = $('#dob').val();
        const nationality = $('#nationality').val();
        const hobbies = $('#hobbies').val();
        const gender = $('#gender').val();
        
        $('#display-name').text(name);
        $('#display-dob').text(dob);
        $('#display-nationality').text(nationality);
        $('#display-hobbies').text(hobbies);
        $('#display-gender').text(gender);
        
        this.reset();
    });
});