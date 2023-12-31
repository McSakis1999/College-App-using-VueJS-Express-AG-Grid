﻿# <a name="_xi4z123bxs4t"></a>**Εγχειρίδιο Χρήσης της Ιστοσελίδας**
Καλωσορίσατε στο Σύστημα Διαχείρισης Πληροφοριών Φοιτητών AICOLLEGE! Αυτή η ιστοσελίδα σας επιτρέπει να διαχειρίζεστε πληροφορίες φοιτητών αποτελεσματικά.
## <a name="_s6d1gnyoavxb"></a>**Περιεχόμενα**
1. Επεξήγηση Εργαλείων
   1. Back-end
   1. Front-end
1. Getting Started
   1. Πρόσβαση στην Ιστοσελίδα
   1. Πλοήγηση
1. Προσθήκη Φοιτητή
   1. Συμπλήρωση Πληροφοριών Φοιτητή
   1. Υποβολή της Φόρμας
1. Προβολή Φοιτητών
   1. Πρόσβαση στη Σελίδα Φοιτητών
   1. Περιήγηση στη Λίστα Φοιτητών
1. Σελίδα για Κινητά
## <a name="_yveocvhmkoqk"></a>**1. Επεξήγηση Εργαλείων**
**Back-end**

Για την δημιουργία του back-end  χρησιμοποιήθηκαν τα παρακάτω εργαλεία: 

- Sqlite3 : Βάση δεδομένων με βοηθητικές βιβλιοθήκες (cors,bodyParser)
- Express: Επικοινωνία endpoints
- Bcrypt: Κρυπτογράφηση κωδικών

**Front-end**

Για την δημιουργία του front-end  χρησιμοποιήθηκαν τα παρακάτω εργαλεία:

- VueJS : Framework
- Ag-grid : Βιβλιοθήκη δημιουργίας αλληλεπιδραστικών πινάκων
- Axios: Επικοινωνία μέσω http με το backend
- Bootstrap/Font-awesome : βιβλιοθήκες μορφοποίησης
## <a name="_fnf4ityf2y0o"></a>**2. Getting Started**
### <a name="_ag418mozzyns"></a>**Πρόσβαση στην Ιστοσελίδα**
Για να αποκτήσετε πρόσβαση στην ιστοσελίδα, ανοίξτε το backend φάκελο του project στο VS Code και τρέξτε την εντολή **node .** για να ξεκινήσει το πρόγραμμα.

Έπειτα πλοηγηθείτε στο app **cd frontend** , **cd collegeui** και στην συνέχεια τρέξτε την εντολή **npm run dev**.

Ακολουθώντας το σύνδεσμο που θα εμφανιστεί στο terminal θα μπορείτε να δείτε την σελίδα.
![0](https://github.com/McSakis1999/collegeForm/assets/58091482/186aedfd-7b41-43c3-b9ed-c11e6595ef44)


### <a name="_32p9polchym3"></a>**Πλοήγηση**

Πλοηγηθείτε στην εφαρμογή μέσω του μενού πλοήγησης ή των συνδέσμων που παρέχονται σε κάθε σελίδα. Χρησιμοποιήστε το μενού για να μεταβείτε σε διάφορες ενότητες της εφαρμογής.

![1](https://github.com/McSakis1999/collegeForm/assets/58091482/d33019f2-1dab-4553-aa84-c9002d3f4144)

## <a name="_s3xqrkx15fjw"></a>**3. Προσθήκη Φοιτητή**
### <a name="_6kn6viip4q9x"></a>**Συμπλήρωση Πληροφοριών Φοιτητή**
Κάντε κλικ στον σύνδεσμο "Add Student" στο μενού πλοήγησης.

Θα εμφανιστεί μια φόρμα στη σελίδα.

Συμπληρώστε τις πληροφορίες του φοιτητή στα αντίστοιχα πεδία:

Όνομα\*

Επώνυμο\*

Διεύθυνση

Τηλέφωνο

Email\*

Κωδικός πρόσβασης\*

Όπου \* αποτελεί υποχρεωτικό πεδίο.
![2](https://github.com/McSakis1999/collegeForm/assets/58091482/ca2ece25-9b32-4d04-909b-5d7d7fe25d9a)

### <a name="_yrtgx2u2l7jl"></a>**Υποβολή της Φόρμας**
Αφού συμπληρώσετε τις πληροφορίες, κάντε κλικ στο κουμπί "Submit".

Το σύστημα θα ελέγξει τα απαιτούμενα πεδία και θα εμφανίσει ένα μήνυμα σφάλματος αν χρειαστεί.

Εάν ο έλεγχος είναι επιτυχής, θα εμφανιστεί ένα παράθυρο επιβεβαίωσης που θα προβάλλει τα δεδομένα που εισάγατε.

<img src="https://user-images.githubusercontent.com/58091482/264150435-09251694-fc91-490f-9b56-e190e925c23a.jpg" alt="3" style="width:300px;height:auto;">

## <a name="_ch1kml3sfytk"></a>**4. Προβολή Φοιτητών**
### <a name="_euchppood7kc"></a>**Πρόσβαση στη Σελίδα Φοιτητών**
Μεταβείτε στον σύνδεσμο "Student Catalog" στο μενού πλοήγησης.

Η σελίδα Φοιτητών θα εμφανίσει έναν πίνακα με τις πληροφορίες των φοιτητών.
![4](https://github.com/McSakis1999/collegeForm/assets/58091482/b461e153-e44e-44f9-bde5-524c665320f4)



Κάνοντας κλίκ δίπλα στο τίτλο κάθε πεδίου μπορείτε να βρείτε ένα παράθυρο φίλτρων για καλύτερη αναζήτηση στον πίνακα. (1)

Τραβώντας τις λευκές μπάρες δίπλα στον τίτλο κάθε πεδίου μπορείτε να αυξομειώσετε το μέγεθος των στηλών. (2)
### <a name="_lfl7h8hukglt"></a>**Περιήγηση στη Λίστα Φοιτητών**
Κυλήστε μέσω του πίνακα για να δείτε όλες τις λεπτομέρειες των φοιτητών.

Εάν τα δεδομένα υπερβαίνουν την ορατή περιοχή, μπορείτε να χρησιμοποιήσετε τη γραμμή κύλισης του πίνακα για να πλοηγηθείτε. (3)

Ο πίνακας επιτρέπει την ταξινόμηση και την αναζήτηση για συγκεκριμένες πληροφορίες.

Τα δεδομένα στον πίνακα θα διατηρηθούν ακόμη και μετά την ανανέωση της σελίδας, παρέχοντας μια συνεπή προβολή των πληροφοριών των φοιτητών. Για να επιτευχθεί αυτό, διατηρούνται αντίγραφα στο localstorage της εφαρμογης.
### <a name="_679wip4wabhx"></a>**5. Σελίδα για κινητά**

<img src="https://user-images.githubusercontent.com/58091482/264148086-0905923a-8217-4e8e-bb41-504026df5f67.png" alt="Vite-App-mobile2" style="width:300px; height:auto;">

<img src="https://user-images.githubusercontent.com/58091482/264148122-b1b92f3c-b9e8-411a-a61f-3becfb9be7f8.png" alt="Vite-App-mobile" style="width:300px; height:auto;">



