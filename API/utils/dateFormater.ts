export function dateFormater(date: Date, format: 'complete' | 'hour' | 'date') {
    switch (format) {
        case 'complete':
            return date.toLocaleString('pt-BR', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            }); break;
        case 'hour':
            return date.toLocaleString('pt-BR', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            }); break;
        case 'date':
            return date.toLocaleString('pt-BR', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            }); break;

    }

}