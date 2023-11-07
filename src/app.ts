import { EmailFootprint } from './models/emailFootprint';

const emailId = prompt("Enter email id: ");

if (emailId !== null) {
  const inboxStandardEmail = parseInt(prompt("Enter number of standard emails received: ") || '0');
  const inboxAttachmentEmail = parseInt(prompt("Enter number of attachment emails received: ") || '0');
  const sentStandardEmail = parseInt(prompt("Enter number of standard emails sent: ") || '0');
  const sentAttachmentEmail = parseInt(prompt("Enter number of attachment emails sent: ") || '0');
  const spamEmail = parseInt(prompt("Enter number of spam emails: ") || '0');

  const emailFootprint = new EmailFootprint(emailId);

  emailFootprint.calculateInboxCarbonFootprint(inboxStandardEmail, inboxAttachmentEmail);
  emailFootprint.calculateSentCarbonFootprint(sentStandardEmail, sentAttachmentEmail);
  emailFootprint.calculateSpamCarbonFootprint(spamEmail);

  emailFootprint.displayCarbonFootprint();
} else {
  console.log("Invalid email address entered.");
}
