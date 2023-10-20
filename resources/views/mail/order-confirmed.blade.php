<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
    <meta charset="utf-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings
            xmlns:o="urn:schemas-microsoft-com:office:office"
          >
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <style>
        td,
        th,
        div,
        p,
        a,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Segoe UI", sans-serif;
          mso-line-height-rule: exactly;
        }
      </style>
    <![endif]-->

    <title>Order Confirmation</title>
    <style>
        /* Your custom CSS resets for email */
        /*
 * Here is where you can add your global email CSS resets.
 *
 * We use a custom, email-specific CSS reset, instead
 * of Tailwind's web-optimized `base` layer.
 *
 * Styles defined here will be inlined.
*/
        img {
            max-width: 100%;
            vertical-align: middle;
            line-height: 1;
            border: 0
        }

        /* Tailwind CSS components */
        .avatar.placeholder>div {
            display: flex;
            align-items: center;
            justify-content: center
        }

        @media (hover:hover) {

            .table tr.hover:hover,
            .table tr.hover:nth-child(even):hover {
                --tw-bg-opacity: 1 !important;
                background-color: hsl(var(--b2) / var(--tw-bg-opacity)) !important
            }
        }

        .stack {
            display: inline-grid;
            place-items: center;
            align-items: flex-end
        }

        .stack>* {
            grid-column-start: 1;
            grid-row-start: 1;
            transform: translateY(10%) scale(0.9);
            z-index: 1;
            width: 100%;
            opacity: 0.6
        }

        .stack>*:nth-child(2) {
            transform: translateY(5%) scale(0.95);
            z-index: 2;
            opacity: 0.8
        }

        .stack>*:nth-child(1) {
            transform: translateY(0) scale(1);
            z-index: 3;
            opacity: 1
        }

        .table {
            position: relative;
            width: 100%;
            text-align: left;
            font-size: 0.875rem;
            line-height: 1.25rem;
            border-radius: var(--rounded-box, 1rem)
        }

        .table :where(.table-pin-rows thead tr) {
            position: sticky;
            top: 0px;
            z-index: 1;
            --tw-bg-opacity: 1;
            background-color: hsl(var(--b1) / var(--tw-bg-opacity))
        }

        .table :where(.table-pin-rows tfoot tr) {
            position: sticky;
            bottom: 0px;
            z-index: 1;
            --tw-bg-opacity: 1;
            background-color: hsl(var(--b1) / var(--tw-bg-opacity))
        }

        .table :where(.table-pin-cols tr th) {
            position: sticky;
            left: 0px;
            right: 0px;
            --tw-bg-opacity: 1;
            background-color: hsl(var(--b1) / var(--tw-bg-opacity))
        }

        @keyframes button-pop {
            0% {
                transform: scale(var(--btn-focus-scale, 0.98)) !important
            }

            40% {
                transform: scale(1.02) !important
            }

            100% {
                transform: scale(1) !important
            }
        }

        @keyframes checkmark {
            0% {
                background-position-y: 5px !important
            }

            50% {
                background-position-y: -2px !important
            }

            100% {
                background-position-y: 0 !important
            }
        }

        @keyframes modal-pop {
            0% {
                opacity: 0 !important
            }
        }

        @keyframes progress-loading {
            50% {
                background-position-x: -115% !important
            }
        }

        @keyframes radiomark {
            0% {
                box-shadow: 0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset !important
            }

            50% {
                box-shadow: 0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset !important
            }

            100% {
                box-shadow: 0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset !important
            }
        }

        @keyframes rating-pop {
            0% {
                transform: translateY(-0.125em) !important
            }

            40% {
                transform: translateY(-0.125em) !important
            }

            100% {
                transform: translateY(0) !important
            }
        }

        .table :where(th, td) {
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            vertical-align: middle
        }

        .table tr.active,
        .table tr.active:nth-child(even),
        .table-zebra tbody tr:nth-child(even) {
            --tw-bg-opacity: 1;
            background-color: hsl(var(--b2) / var(--tw-bg-opacity))
        }

        .table :where(thead, tbody) :where(tr:not(:last-child)),
        .table :where(thead, tbody) :where(tr:first-child:last-child) {
            border-bottom-width: 1px;
            --tw-border-opacity: 1;
            border-bottom-color: hsl(var(--b2) / var(--tw-border-opacity))
        }

        .table :where(thead, tfoot) {
            white-space: nowrap;
            font-size: 0.75rem;
            line-height: 1rem;
            font-weight: 700;
            color: hsl(var(--bc) / 0.6)
        }

        @keyframes toast-pop {
            0% {
                transform: scale(0.9) !important;
                opacity: 0 !important
            }

            100% {
                transform: scale(1) !important;
                opacity: 1 !important
            }
        }

        /**
 * @import here any custom CSS components - that is, CSS that
 * you'd want loaded before the Tailwind utilities, so the
 * utilities can still override them.
*/
        /* Tailwind CSS utility classes */
        .absolute {
            position: absolute
        }

        .m-0 {
            margin: 0
        }

        .my-12 {
            margin-top: 48px;
            margin-bottom: 48px
        }

        .mb-1 {
            margin-bottom: 4px
        }

        .mb-4 {
            margin-bottom: 16px
        }

        .mb-6 {
            margin-bottom: 24px
        }

        .inline-block {
            display: inline-block
        }

        .table {
            display: table
        }

        .hidden {
            display: none
        }

        .w-1\/2 {
            width: 50%
        }

        .w-12 {
            width: 48px
        }

        .w-\[552px\] {
            width: 552px
        }

        .w-\[600px\] {
            width: 600px
        }

        .w-full {
            width: 100%
        }

        .max-w-full {
            max-width: 100%
        }

        .cursor-default {
            cursor: default
        }

        .rounded {
            border-radius: 4px
        }

        .bg-blue-500 {
            background-color: #3b82f6
        }

        .bg-slate-200 {
            background-color: #e2e8f0
        }

        .bg-slate-300 {
            background-color: #cbd5e1
        }

        .bg-slate-50 {
            background-color: #f8fafc
        }

        .bg-white {
            background-color: #fff
        }

        .bg-cover {
            background-size: cover
        }

        .bg-top {
            background-position: top
        }

        .bg-no-repeat {
            background-repeat: no-repeat
        }

        .p-0 {
            padding: 0
        }

        .p-12 {
            padding: 48px
        }

        .p-6 {
            padding: 24px
        }

        .px-12 {
            padding-left: 48px;
            padding-right: 48px
        }

        .px-6 {
            padding-left: 24px;
            padding-right: 24px
        }

        .py-4 {
            padding-top: 16px;
            padding-bottom: 16px
        }

        .pb-8 {
            padding-bottom: 32px
        }

        .pl-4 {
            padding-left: 16px
        }

        .pr-4 {
            padding-right: 16px
        }

        .text-left {
            text-align: left
        }

        .text-center {
            text-align: center
        }

        .text-right {
            text-align: right
        }

        .align-top {
            vertical-align: top
        }

        .font-sans {
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif
        }

        .text-2xl {
            font-size: 24px
        }

        .text-4xl {
            font-size: 36px
        }

        .text-base {
            font-size: 16px
        }

        .text-lg {
            font-size: 18px
        }

        .text-sm {
            font-size: 14px
        }

        .text-xl {
            font-size: 20px
        }

        .text-xs {
            font-size: 12px
        }

        .font-semibold {
            font-weight: 600
        }

        .uppercase {
            text-transform: uppercase
        }

        .italic {
            font-style: italic
        }

        .leading-12 {
            line-height: 48px
        }

        .leading-16 {
            line-height: 64px
        }

        .leading-6 {
            line-height: 24px
        }

        .leading-8 {
            line-height: 32px
        }

        .leading-none {
            line-height: 1
        }

        .text-black {
            color: #000
        }

        .text-indigo-700 {
            color: #4338ca
        }

        .text-slate-50 {
            color: #f8fafc
        }

        .text-slate-500 {
            color: #64748b
        }

        .text-slate-600 {
            color: #475569
        }

        .text-slate-700 {
            color: #334155
        }

        .text-white {
            color: #fff
        }

        .mso-font-width-\[-100\%\] {
            mso-font-width: -100%
        }

        .shadow-sm {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
        }

        .\[-webkit-font-smoothing\:antialiased\] {
            -webkit-font-smoothing: antialiased
        }

        .\[text-decoration\:none\] {
            text-decoration: none
        }

        .\[word-break\:break-word\] {
            word-break: break-word
        }

        /* Your custom utility classes */
        /*
 * Here is where you can define your custom utility classes.
 *
 * We wrap them in the `utilities` @layer directive, so
 * that Tailwind moves them to the correct location.
 *
 * More info:
 * https://tailwindcss.com/docs/functions-and-directives#layer
*/
        .hover\:text-indigo-500:hover {
            color: #6366f1 !important
        }

        .hover\:\!\[text-decoration\:underline\]:hover {
            text-decoration: underline !important
        }

        @media (max-width: 600px) {
            .sm\:my-8 {
                margin-top: 32px !important;
                margin-bottom: 32px !important
            }

            .sm\:inline-block {
                display: inline-block !important
            }

            .sm\:w-6 {
                width: 24px !important
            }

            .sm\:w-full {
                width: 100% !important
            }

            .sm\:px-0 {
                padding-left: 0 !important;
                padding-right: 0 !important
            }

            .sm\:px-4 {
                padding-left: 16px !important;
                padding-right: 16px !important
            }

            .sm\:px-6 {
                padding-left: 24px !important;
                padding-right: 24px !important
            }

            .sm\:py-8 {
                padding-top: 32px !important;
                padding-bottom: 32px !important
            }

            .sm\:pb-8 {
                padding-bottom: 32px !important
            }

            .sm\:text-3xl {
                font-size: 30px !important
            }

            .sm\:leading-10 {
                line-height: 40px !important
            }

            .sm\:leading-8 {
                line-height: 32px !important
            }
        }
    </style>

</head>

<body class="m-0 p-0 w-full [word-break:break-word] [-webkit-font-smoothing:antialiased] bg-slate-50">

    <div class="hidden">
        We received your order !
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;
        &#8199;&#65279;&#847;

    </div>
    <div role="article" aria-roledescription="email" aria-label="Order Confirmation" lang="en">

        <div class="bg-slate-50 sm:px-4 font-sans">
            <table align="center" cellpadding="0" cellspacing="0" role="none">
                <tr>
                    <td class="w-[552px] max-w-full">
                        <div class="my-12 sm:my-8 text-center">
                            <a href="https://maizzle.com">
                                <img src="https://api.95dot.com/logo.svg" width="70" alt="95dot">
                            </a>
                        </div>

                        <table class="w-full" cellpadding="0" cellspacing="0" role="none">
                            <tr>
                                <td class="p-12 sm:px-6 text-base text-slate-700 bg-white rounded shadow-sm">
                                    <h1 class="m-0 mb-6 text-2xl sm:leading-8 text-black font-semibold">
                                        We're On It,
                                    </h1>

                                    <p class="m-0 leading-6">
                                        Hey {{ $user->full_name ? $user->full_name : $user->name }},
                                        <br>
                                        <br>
                                        This is just a quick email to say we've received you order.
                                    </p>

                                    <p>Order #{{ $order->id }}</p>
                                    <p>
                                        {{ $order->card->type }}&nbsp;{{ $order->card->material }}&nbsp;Card
                                    </p>




                                    <div role="separator" style="line-height: 24px">&zwj;</div>




                                    <div>
                                        <a href="https://95dot.com/admin/nfc/orders"
                                            class="inline-block py-4 px-6 text-base leading-none font-semibold rounded text-slate-50 bg-blue-500 [text-decoration:none]">
                                            <!--[if mso]>
      <i class="mso-font-width-[-100%]" style="letter-spacing: 32px; mso-text-raise: 30px;" hidden="">&nbsp;</i>
    <![endif]-->
                                            <span style="mso-text-raise: 16px">
                                                Your Orders &rarr;
                                            </span>
                                            <!--[if mso]>
      <i class="mso-font-width-[-100%]" style="letter-spacing: 32px;" hidden="">&nbsp;</i>
    <![endif]-->
                                        </a>
                                    </div>




                                    <div role="separator" class="false bg-slate-200"
                                        style="height: 1px; line-height: 1px; margin: 0; margin-top: 32px; margin-bottom: 32px">
                                        &zwj;</div>


                                    <p class="m-0">
                                        If you have any problem please contact us and we'll be happy
                                        to help.
                                        <br>
                                        <br>
                                        Thanks, <br>95dot Team
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>

    </div>
</body>

</html>
