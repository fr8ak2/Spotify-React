export const DayTimes = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 12) {
        return 'Morning';
    }

    if (currentHour >= 12 && currentHour < 17) {
        return 'Afternoon';
    }

    return 'Evening';
};

export const ISO = (seconds: number) => {
	return new Date(seconds).toISOString().substring(15, 15 + 4);
};

