class ApplicationMailer < ActionMailer::Base
    default from: "Minuszero - Contact System <no-reply@minuszero.com>"
    
    def contact_email(email, subject, message)
        @to_email = "info@wintermusicfestivals.com"
        #@to_email = "edgar@toro-labs.com"
        @email = email
        @subject = subject
        @message = message
        mail(to: @to_email, subject: 'Message received from minuszero.com')
    end
end
