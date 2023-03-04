export const sessionTime = (current_time, match_time) => {
    return (abs(current_time, match_time)<24)
}
