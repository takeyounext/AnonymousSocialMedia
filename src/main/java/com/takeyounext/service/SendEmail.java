// Java program to send email 
package com.takeyounext.service;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage; 


public class SendEmail 
{ 

public static void main(String [] args) {	 
	String host="mail.javatpoint.com";  
	  final String user="takeyounext@gmail.com";//change accordingly  
	  final String password="Takeyounext@123";//change accordingly  
	    
	  String to="debkumargiri13@gmail.com";//change accordingly  
	  
	  final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
	   //Get the session object  
	   Properties props = new Properties();  
//	   props.setProperty("mail.smtp.host", "smtp.gmail.com");
//	    props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
////	    props.setProperty("mail.smtp.socketFactory.fallback", "false");
//	    props.setProperty("mail.smtp.port", "587");
//	    props.setProperty("mail.smtp.socketFactory.port", "587");
//	    props.put("mail.smtp.auth", "true");
//	    props.put("mail.debug", "true");
//	    props.put("mail.store.protocol", "pop3");
//	    props.put("mail.transport.protocol", "smtp"); 
//	    props.put("mail.smtp.starttls.enable", "true");
	   props.put("mail.smtp.host", "smtp.gmail.com");    
       props.put("mail.smtp.socketFactory.port", "465");    
       props.put("mail.smtp.socketFactory.class",    
                 "javax.net.ssl.SSLSocketFactory");    
       props.put("mail.smtp.auth", "true");    
       props.put("mail.smtp.port", "465"); 
	     
	   Session session = Session.getDefaultInstance(props,  
	    new javax.mail.Authenticator() {  
	      protected PasswordAuthentication getPasswordAuthentication() {  
	    return new PasswordAuthentication(user,password);  
	      }  
	    });  
	  
	   //Compose the message  
	    try {  
	     MimeMessage message = new MimeMessage(session);  
	     message.setFrom(new InternetAddress(user));  
	     message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));  
	     message.setSubject("javatpoint");  
	     message.setText("This is simple program of sending email using JavaMail API");  
	       
	    //send the message  
	     Transport.send(message);  
	  
	     System.out.println("message sent successfully...");  
	   
	     } catch (MessagingException e) {e.printStackTrace();}  
	 }  
} 
