# Learning Management System

## How To Run

- Clone or download the repo
- Create Virtual Environment
	- py -m venv projectroot
	- python3 -m venv my_env [Linux]
	- virtualenv venv [windows]
- Activate virtualenv
	- Source venv/bin/activate [Linux]
	- projectroot\Scripts\activate.bat [windows]
- pip install -r requirements.txt
- Go LMS/LMS dir and run
	- `python manage.py migrate`
	- `python manage.py makemigrations`
	- - `python manage.py migrate`
- Create superuser (by default lms/lms123)
    - python manage.py createsuperuser
    - python manage.py createsuperuser
    - If not work run 
        winpty python manage.py createsuperuser
- then run> py manage.py runserver
