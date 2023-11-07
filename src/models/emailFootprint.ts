export class EmailFootprint {
    private STANDARD_CO2_PER_EMAIL: number = 0.004;
    private ATTACHMENT_CO2_PER_EMAIL: number = 0.05;
    private SPAM_CO2_PER_EMAIL: number = 0.0003;
  
    private emailId: string;
    private inboxCarbonFootprint: number = 0;
    private sentCarbonFootprint: number = 0;
    private spamCarbonFootprint: number = 0;
  
    constructor(emailId: string) {
      this.emailId = emailId;
    }
  
    calculateInboxCarbonFootprint(inboxStandardEmail: number, inboxAttachmentEmail: number) {
      this.inboxCarbonFootprint =
        inboxStandardEmail * this.STANDARD_CO2_PER_EMAIL + inboxAttachmentEmail * this.ATTACHMENT_CO2_PER_EMAIL;
    }
  
    calculateSentCarbonFootprint(sentStandardEmail: number, sentAttachmentEmail: number) {
      this.sentCarbonFootprint =
        sentStandardEmail * this.STANDARD_CO2_PER_EMAIL + sentAttachmentEmail * this.ATTACHMENT_CO2_PER_EMAIL;
    }
  
    calculateSpamCarbonFootprint(spamEmail: number) {
      this.spamCarbonFootprint = spamEmail * this.SPAM_CO2_PER_EMAIL;
    }
  
    displayCarbonFootprint() {
      console.log("Carbon Footprint of Emails in a day");
      console.log(`Inbox: ${this.inboxCarbonFootprint} Kg`);
      console.log(`Sent: ${this.sentCarbonFootprint} Kg`);
      console.log(`Spam: ${this.spamCarbonFootprint} Kg`);
    }
  }
  