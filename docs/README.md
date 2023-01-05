# How I Built This
1. Bought the domain [prestonneal.com](https://prestonneal.com). I recommend Hostinger or Namecheap.
1. Added my domain to my Linode account, and updated the records in my domain registrars account to point my domain at Linodes name servers.
1. Started up a Linode server
1. Add firewall rule for my server that only allows SSH (port 22) connection from my home IP address. 
1. Logged into my server, created my user account, installed Nginx and Docker. 
1. Enabled Nginx service to auto-run
1. Created a load balancer in Linode, pointed it my servers private IP address, port 80.
1. Updated my domain in Linode to point [prestonneal.com](https://prestonneal.com) at my load balancers IP address.
    - *At this point visiting http://prestonneal.com showed "Welcome to Nginx" page. Yay!*
1. Install certbot on my server and create an SSL certificate
1. Add the cert to my load balancer for an HTTPS/port 443 listener, and point that entry at my servers private IP, port 80. Delete the HTTP entry on my load balancer.
    - *Now https://prestonneal.com works*
