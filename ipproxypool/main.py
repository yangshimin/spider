from ipproxypool.schedule import Schedule
from ipproxypool.web import app

def main():
    schedule = Schedule()
    schedule.run()
    app.run()

if __name__ == '__main__':
    main()