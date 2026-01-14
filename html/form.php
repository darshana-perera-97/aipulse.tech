<?php
// Enable error reporting for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Set JSON header
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Load PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/phpmailer/src/Exception.php';
require_once __DIR__ . '/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/phpmailer/src/SMTP.php';

// Configuration - UPDATE THESE VALUES
$config = [
    'smtp_host' => 'smtp.gmail.com',        // SMTP server (e.g., smtp.gmail.com, smtp.outlook.com)
    'smtp_port' => 465,                      // SMTP port (587 for TLS, 465 for SSL)
    'smtp_username' => 'darshana.saluka.pc2@gmail.com',  // Your email address
    'smtp_password' => 'berb xprp ivyn rmgy',      // Your email app password
    'from_email' => 'ds.perera.test@gmail.com',      // From email address
    'from_name' => 'AIPulse Contact Form',      // From name
    'recipient_1' => 'ds.perera.1997@gmail.com',     // First recipient email
    'recipient_2' => '',      // Second recipient email (optional, leave empty if not needed)
];
// Get form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';
$source = isset($_POST['source']) ? trim($_POST['source']) : 'unknown'; // garage, solar, saloon, tours

// Validate required fields
if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

try {
    // Create PHPMailer instance
    $mail = new PHPMailer(true);

    // Server settings
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Use TLS
    $mail->Port = $config['smtp_port'];
    $mail->CharSet = 'UTF-8';

    // Recipients - Send to both email addresses
    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress($config['recipient_1']);
    
    // Add second recipient if configured
    if (!empty($config['recipient_2'])) {
        $mail->addAddress($config['recipient_2']);
    }

    // Reply-to set to user's email
    $mail->addReplyTo($email, $name);

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Submission - " . ucfirst($source) . " Website";
    
    // Email body
    $mail->Body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4F46E5; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { color: #6b7280; margin-top: 5px; }
            .footer { text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Contact Form Submission</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>Source Website:</div>
                    <div class='value'>" . htmlspecialchars(ucfirst($source)) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>Name:</div>
                    <div class='value'>" . htmlspecialchars($name) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>Email:</div>
                    <div class='value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></div>
                </div>
                <div class='field'>
                    <div class='label'>Phone:</div>
                    <div class='value'><a href='tel:" . htmlspecialchars($phone) . "'>" . htmlspecialchars($phone) . "</a></div>
                </div>
                <div class='field'>
                    <div class='label'>Message:</div>
                    <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>Submitted:</div>
                    <div class='value'>" . date('Y-m-d H:i:s') . "</div>
                </div>
            </div>
            <div class='footer'>
                <p>This email was sent from the AIPulse contact form.</p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Plain text version
    $mail->AltBody = "
New Contact Form Submission - " . ucfirst($source) . " Website

Source Website: " . ucfirst($source) . "
Name: " . $name . "
Email: " . $email . "
Phone: " . $phone . "
Message: " . $message . "

Submitted: " . date('Y-m-d H:i:s') . "
    ";

    // Send email
    $mail->send();

    // Send auto-reply to user
    $autoReply = new PHPMailer(true);
    $autoReply->isSMTP();
    $autoReply->Host = $config['smtp_host'];
    $autoReply->SMTPAuth = true;
    $autoReply->Username = $config['smtp_username'];
    $autoReply->Password = $config['smtp_password'];
    $autoReply->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $autoReply->Port = $config['smtp_port'];
    $autoReply->CharSet = 'UTF-8';

    $autoReply->setFrom($config['from_email'], $config['from_name']);
    $autoReply->addAddress($email, $name);

    $autoReply->isHTML(true);
    $autoReply->Subject = "Thank you for contacting us!";
    $autoReply->Body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4F46E5; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Thank You!</h2>
            </div>
            <div class='content'>
                <p>Dear " . htmlspecialchars($name) . ",</p>
                <p>Thank you for contacting us! We have received your message and will get back to you as soon as possible.</p>
                <p>Best regards,<br>AIPulse Team</p>
            </div>
        </div>
    </body>
    </html>
    ";

    $autoReply->AltBody = "Dear " . $name . ",\n\nThank you for contacting us! We have received your message and will get back to you as soon as possible.\n\nBest regards,\nAIPulse Team";

    $autoReply->send();

    // Success response
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! We have received your message and will contact you soon.'
    ]);

} catch (Exception $e) {
    // Error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again later.',
        'error' => $mail->ErrorInfo // Remove this in production for security
    ]);
}
?>
